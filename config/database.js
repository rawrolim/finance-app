import fs from 'fs';
import md5 from 'md5';

export default class JSONDatabase {
    constructor(databaseName) {
        this.databaseName = databaseName;
        this.initializeDatabase();
    }

    // Método para inicializar o banco de dados (criar arquivo se não existir)
    async initializeDatabase() {
        try {
            if (!fs.existsSync("./database/" + this.databaseName + '.json')) {
                // Se o arquivo não existir, cria um novo arquivo vazio
                fs.writeFileSync("./database/" + this.databaseName + '.json', JSON.stringify([]))
            }
        } catch (error) {
            console.error("Erro ao inicializar o banco de dados:", error);
        }
    }

    // Método para buscar todos os registros
    async getAll() {
        try {
            const response = fs.readFileSync("./database/" + this.databaseName + '.json');
            const data = JSON.parse(response.toString());
            return data;
        } catch (error) {
            console.error("Erro ao buscar registros:", error);
            return [];
        }
    }

    async getById(id){
        try {
            const response = await this.getAll();
            const data = response.find(i => i._id == id)
            return data;
        } catch (error) {
            console.error("Erro ao buscar registros:", error);
            return null;
        }
    }

    // Método para adicionar um novo registro
    async push(newRecord) {
        try {
            const records = await this.getAll();
            newRecord._id = md5(records.length+1);
            newRecord.createdAt = new Date();
            newRecord.updatedAt = new Date();

            records.push(newRecord);
            await this.save(records);
            return newRecord;
        } catch (error) {
            console.error("Erro ao adicionar registro:", error);
            return false;
        }
    }

    // Método para atualizar um novo registro
    async update(id, newRecord) {
        try {
            const records = await this.getAll();
            let recordsTemp = [];
            for (let i = 0; i < records.lenght; i++) {
                if (records[i]._id != md5(id)) {
                    recordsTemp.push(records[i])
                } else {
                    newRecord.updatedAt = new Date();
                    recordsTemp.push(newRecord)
                }
            }

            await this.save(recordsTemp);
            return newRecord;
        } catch (error) {
            console.error("Erro ao atualizar registro:", error);
            return false;
        }
    }

    // Método para deletar um novo
    async delete(id) {
        try {
            const records = await this.getAll();
            let recordsTemp = [];
            for (let i = 0; i < records.lenght; i++) {
                if (records[i]._id != md5(id))
                    recordsTemp.push(records[i])
            }

            await this.save(recordsTemp);
            return true;
        } catch (error) {
            console.error("Erro ao deletar registro:", error);
            return false;
        }
    }

    // Método para salvar registros no arquivo JSON
    async save(records) {
        try {
            fs.writeFileSync("./database/" + this.databaseName + '.json', JSON.stringify(records))
            return true;
        } catch (error) {
            console.error("Erro ao salvar registros:", error);
            return false;
        }
    }
}