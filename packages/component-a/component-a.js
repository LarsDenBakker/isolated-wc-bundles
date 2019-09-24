import { html, css, LitElement } from 'lit-element';

class ComponentA extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 8px;
        margin: 8px;
        border: 1px solid blue;
      }
    `;
  }

  render() {
    return html`
      <p>
        Component A
      </p>
    `;
  }
}

customElements.define('component-a', ComponentA);
