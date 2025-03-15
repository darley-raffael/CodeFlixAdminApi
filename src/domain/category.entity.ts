import crypto from 'node:crypto';

export type CategoryContructorProps = {
  categoryId?: string;
  name: string;
  description?: string | null;
  isActive?: boolean;
  createdAt?: Date;
}

export type CreateCategoryCommand = {
  name: string;
  description?: string | null;
  isActive?: boolean;
}

export class Category {
  id: string;
  name: string;
  description?: string | null;
  isActive: boolean;
  createdAt: Date;

  constructor(props: CategoryContructorProps) {
    this.id = props.categoryId ?? crypto.randomUUID()
    this.name = props.name
    this.description = props.description
    this.isActive = props.isActive ?? true
    this.createdAt =props.createdAt ?? new Date()
  }


  static create(props: CreateCategoryCommand): Category { //eventos de dominio
    return new Category(props)
  }
  

};