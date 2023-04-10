export class Destination {
  public location: string;
  public description: string;
  public imagePath: string;

  constructor(location: string, desc: string, imagePath: string) {
    this.location = location;
    this.description = desc;
    this.imagePath = imagePath;
  }
}
