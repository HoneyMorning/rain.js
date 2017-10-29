export class Option {
  public width?: number;
  public height?: number;
  public extent?: 'small' | 'middle' | 'large'

  constructor() {
    this.extent = 'middle';
  }
}