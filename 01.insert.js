db.inscriptions.insert(
	{
		"student": "Paula Fernandes",
		"date": new Date(),
		"course": {
			"name": "Programação para Internet"
		}
	}
)

db.inscriptions.insert(
	{
		"student": "Fernanda da Silva",
		"date": new Date(),
		"course": {
			"name": "Ciência da Computação"
		},
		"notas": [9.0, 7.0, 8],
		"skills": [
			{
				"name": "Python",
				"level": "avançado"
			},
			{
				"name": "Banco de Dados",
				"level": "avançado"
			}
		]
	}
)

db.inscriptions.insert(
	{
		"student": "Fabiano Perez",
		"date": new Date(),
		"course": {
			"name": "Programação para Internet"
		},
		"skills": [
			{
				"name": "Python",
				"level": "básico"
			}
		]
	}
)
