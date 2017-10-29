export class Option {
  public width?: number;
  public height?: number;
  public extent?: 'small' | 'middle' | 'large'
  public bgImg?: string;

  constructor() {
    this.extent = 'middle';
  }
}