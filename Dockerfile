# Docker image for the website.
# All certs are handled outside of this image.

ARG build_base_image="node:14.13.0-alpine3.12"
ARG deploy_base_image="nginx:1.16.1-alpine"

# Use an intermediary image to do our builds, removing coupling from the machine executing commands and allowing us to
# trim the fat.
FROM $build_base_image AS builder

WORKDIR /opt/build

# Copy in the public aspects first since they shouldn't change often.
COPY public ./
# Copy in dependency resolution files.
COPY package*.json ./

# Install NPM dependencies. Execute this before copy to ensure that caching occurs.
COPY node_modules ./

# Copy in the public and source folders for building
COPY src ./

# Build the site into static js/html.
RUN npm run build


FROM $deploy_base_image

# Destroy the old html folder contents to avoid confusion.
RUN rm -rf /usr/share/nginx/html/*

# Copy in the required files we built in the previous image.
# Only the Dist folder is required as everything is compiled into there on build.
COPY --from=builder /opt/build /usr/share/nginx/html

# Copy in our configuration, which is applied on startup.
COPY ./deployment/server.conf /etc/nginx/conf.d/server.conf

# Serve on http and https.
EXPOSE 80 443

# Start nginx with a global parameter specifying that we wish to follow the process.
# This is required as a docker container is a single running process, so if nginx crashes we also want the container
# to turn off, allowing us to view that it's no longer working.
ENTRYPOINT ["nginx", "-g", "daemon off;"]
