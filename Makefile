SERVICE := homepage

all: help

help: ## Show help messages
	@echo "${SERVICE} "
	@echo
	@echo "Usage:\tmake COMMAND"
	@echo
	@echo "Commands:"
	@sed -n '/##/s/\(.*\):.*##/  \1#/p' ${MAKEFILE_LIST} | grep -v "MAKEFILE_LIST" | column -t -c 2 -s '#'

install: ## Install deps
	pnpm i

dev run: ## Run local
	pnpm dev


build: ## Build
	pnpm build

update:
	pnpm install astro@latest
