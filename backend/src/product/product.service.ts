import { Injectable } from '@nestjs/common'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { PrismaService } from '../prisma.service'

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}
  create(createProductDto: CreateProductDto) {
    const createdProduct = this.prisma.product.create({ data: createProductDto })
    return createdProduct
  }

  findAll() {
    const products = this.prisma.product.findMany()
    return products
  }

  findOne(id: number) {
    const product = this.prisma.product.findUnique({
      where: {
        id
      }
    })
    return product
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    const updatedProduct = this.prisma.product.update({
      where: {
        id
      },
      data: updateProductDto
    })
    return updatedProduct
  }

  remove(id: number) {
    const deletedProduct = this.prisma.product.delete({
      where: {
        id
      }
    })
    return deletedProduct
  }
}
