import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, Min, Max, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateProductDto {
    @ApiProperty({ example: 'Product Name', description: 'The name of the product' })
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(100)
    name: string;

    @ApiProperty({ example: 'Product Description', description: 'The description of the product' })
    @IsNotEmpty()
    @IsString()
    @MinLength(2)
    @MaxLength(500)
    description: string;

    @ApiProperty({ example: 99.99, description: 'The price of the product' })
    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    price: number;

    @ApiProperty({ example: 'Category', description: 'The category of the product' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    category: string;

    @ApiProperty({ example: 'Brand Name', description: 'The brand of the product' })
    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    brand: string;

    @ApiProperty({ example: 10.0, description: 'The discount percentage of the product', required: false })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(100)
    discount_percentage?: number;

    @ApiProperty({ example: 4.5, description: 'The rating of the product', required: false })
    @IsOptional()
    @IsNumber()
    @Min(0)
    @Max(5)
    rating?: number;
}
