import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'image-filter',
  styleUrl: 'image-filter.css',
  shadow: false,
  scoped: true,
})
export class ImageFilter {
  @Prop() src: string;
  @Prop() alt: string;
  @Prop() width: string;
  @Prop() height: string;
  @Prop() filter: string;
  @Prop() class: string;

  /* prettier-ignore */
  render() {
    return (
      <img  
        src={this.src} 
        alt={this.alt} 
        width={this.width} 
        height={this.height}
        class={this.class ? this.class + " " + this.filter : this.filter } />
    )
  }
}
