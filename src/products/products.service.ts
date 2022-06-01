import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) 
    private productRepository: Repository<Product>
  ){}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    return await this.productRepository.save(createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async findOne(id: number): Promise<Product> {
    const productExist = await this.productRepository.findOne({ where: { id } });
    if (!productExist) throw new NotFoundException('Este producto no existe');
    return productExist;
  }

  async update(id: number, updateProductDto: Partial<UpdateProductDto>) {
    const productExist = await this.productRepository.findOne({ where: { id } });

    if (!productExist) throw new NotFoundException('Este post no existe');
    const updatedProduct = Object.assign(productExist, updateProductDto);

    return await this.productRepository.save(updatedProduct);
  }


  async remove(id: number): Promise<void> {
    const productExist = await this.productRepository.findOne({ where: { id } });
    if (!productExist) throw new NotFoundException('Este producto no existe');

    await this.productRepository.delete(id);
  }  

}
