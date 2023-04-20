SERVICE := homepage

all: help

help: ## Show help messages
	@echo "Vuepress - ${SERVICE} "
	@echo
	@echo "Usage:\tmake COMMAND"
	@echo
	@echo "Commands:"
	@sed -n '/##/s/\(.*\):.*##/  \1#/p' ${MAKEFILE_LIST} | grep -v "MAKEFILE_LIST" | column -t -c 2 -s '#'

dev run: ## Run vuepress local
	 pnpm docs:dev

build: ## Build vuepress
	 pnpm i
	 pnpm docs:build

install deps: ## Install the deps
	pnpm add -D vuepress@next vuepress/bundler-vite@next @vuepress/client@next @vuepress/theme-default@next @vuepress/utils
