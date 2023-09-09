TYPEORM=typeorm
NPM=npm

new-migration:
	${TYPEORM} migration:create ./migrations/$(name)

dev: 
	${NPM} run start:dev