import { Body, Controller, Post, Get } from "@nestjs/common";
// import { ExerciseService } from "@/core/exercise/services/exercise.services";
// import { GetExerciseDto } from "@/core/exercise/dtos";
// import { Exercise } from "@/core/exercise/entities/exercise.entity";
import { ApiBody, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString } from "class-validator";

class ChallengeDto {
    @IsNumber()
    code: number;
}

@Controller("exercise")
export class ExerciseController {
    //   constructor(private readonly ExerciseService: ExerciseService) {}

    @Get()
    @ApiOperation({ summary: "Dados de exercicio" })
    @ApiResponse({ status: 200, description: "Exercicio encontrado" })
    @ApiResponse({ status: 404, description: "Exercicio não encontrado" })
    async exercisebyId() {
        return {
            "title": "JSON Example",
            "subtitle": "A simple JSON structure",
            "description": "This JSON example demonstrates a basic structure with various data types.",
            "exampleSqlTitle": "Example JSON",
            "exampleSqlContent": "SELECT * \nFROM example_table \nWHERE id = 1",
            "exerciseTitle": "Exercise",
            "exerciseContent": "Modify the JSON structure to include an additional field for 'created_at' with the current timestamp."
        };
    }

    @Post("challenge")
    @ApiOperation({ summary: "Concluir desafio" })
    @ApiResponse({ status: 200, description: "Desafio concluído com sucesso", type: Object })
    @ApiResponse({ status: 404, description: "Código inválido do desafio" })
    @ApiBody({ type: ChallengeDto }) // Isso é necessário para o Swagger gerar o corpo
    async challenge(@Body() body: ChallengeDto) {
        const { code } = body;
        if (code === 4586) {
            return {
                success: true,
                statusChallenge: "completed"
            };
        } else {
            return {
                success: false,
                statusChallenge: "invalid",
                message: "Código do desafio inválido"
            };
        }
    }

    @Post("task")
    @ApiOperation({ summary: "Concluir Tarefa" })
    @ApiResponse({ status: 200, description: "Tarefa concluída com sucesso", type: Object })
    @ApiResponse({ status: 404, description: "Dados da tarefa invalido" })
    @ApiBody({ type: ChallengeDto }) // Isso é necessário para o Swagger gerar o corpo
    async task(@Body() body: ChallengeDto) {
        const { code } = body;
        if (code === 4586) {
            return {
                success: true,
                statusChallenge: "completed"
            };
        } else {
            return {
                success: false,
                statusChallenge: "invalid",
                message: "Código do desafio inválido"
            };
        }
    }

    @Get("taskStatus")
    @ApiOperation({ summary: "Status Tarefa" })
    @ApiResponse({ status: 200, description: "Status da tarefa", type: Object })
    @ApiResponse({ status: 404, description: "Dados para o status da tarefa invalido" })
    async taskStatus() {
        return {
            "task": {
                "title": "Task",
                "data": [
                    {
                        "id": 1,
                        "title": "Busque o título de cada filme",
                        "status": "em progresso"
                    },
                    {
                        "id": 2,
                        "title": "Encontre o diretor do filme 'Inception'",
                        "status": "pendente"
                    },
                    {
                        "id": 3,
                        "title": "Liste os filmes lançados após 2000",
                        "status": "pendente"
                    },
                    {
                        "id": 4,
                        "title": "Calcule a duração média dos filmes",
                        "status": "pendente"
                    },
                    {
                        "id": 5,
                        "title": "Ordene os filmes por ano de lançamento",
                        "status": "pendente"
                    }
                ]
            }
        }
    }

    @Get("tableExample")
    @ApiOperation({ summary: "Exemplo de tabela" })
    @ApiResponse({ status: 200, description: "Exemplo de tabela", type: Object })
    @ApiResponse({ status: 404, description: "Dados para o Exemplo de tabela invalido" })
    async tableExample() {
        return {
            "table": {
                "title": "Filmes",
                "data": [
                    {
                        "id": 1,
                        "title": "Inception",
                        "director": "Christopher Nolan",
                        "release_year": 2010,
                        "minutes": 120
                    },
                    {
                        "id": 2,
                        "title": "The Matrix",
                        "director": "Lana Wachowski, Lilly Wachowski",
                        "release_year": 1999,
                        "minutes": 120
                    },
                    {
                        "id": 3,
                        "title": "Interstellar",
                        "director": "Christopher Nolan",
                        "release_year": 2014,
                        "minutes": 169
                    },
                    {
                        "id": 4,
                        "title": "The Godfather",
                        "director": "Francis Ford Coppola",
                        "release_year": 1972,
                        "minutes": 175
                    },
                    {
                        "id": 5,
                        "title": "Pulp Fiction",
                        "director": "Quentin Tarantino",
                        "release_year": 1994,
                        "minutes": 154
                    }
                ]
            }
        }
    }
}
