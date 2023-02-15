# Run the site's containers and the canvas instance container
start-all:
	docker-compose up -d && cd canvas-lms/ && docker-compose up -d && cd ..

# Stop and remove the site's containers and the canvas instance container
destroy-all:
	docker-compose down && cd canvas-lms/ && docker-compose down && cd ..

# Build the site's container images
build-site:
	docker-compose build 

# Run the site's containers
start-site: 
	docker-compose up -d 

# Stop and remove the site's containers
destroy-site:
	docker-compose down 

# Build the canvas instance container image. Takes a very long time + has prompts
build-canvas:
	cd canvas-lms/ && ./script/docker_dev_setup.sh && cd ..

# Run the canvas instance container
start-canvas:
	cd canvas-lms/ && docker-compose up -d && cd ..

# Stop and remove the canvas instance container
destroy-canvas:
	cd canvas-lms/ && docker-compose down && cd ..

