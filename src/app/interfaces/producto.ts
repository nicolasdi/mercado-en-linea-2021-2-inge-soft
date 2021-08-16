export interface Producto {
  id: number;
  descripcion: string;
  titulo: string;
  foto: string;
  precio: number;
  fk_user: number;
}
