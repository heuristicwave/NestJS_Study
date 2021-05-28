import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDto {
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional()
    @IsString({ each: true })   // Specifies if validated value is an array and each of its items must be validated
    readonly genres: string[];
}