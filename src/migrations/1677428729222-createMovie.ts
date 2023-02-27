import { MigrationInterface, QueryRunner } from "typeorm";

export class createMovie1677428729222 implements MigrationInterface {
    name = 'createMovie1677428729222'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "movies_pkey"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "description" text`);
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "id" BIGSERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "movies_pkey" PRIMARY KEY ("id")`);
    }

}
