import { html, css, LitElement } from 'lit-element';

class ComponentC extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 8px;
        margin: 8px;
        border: 1px solid yellow;
      }
    `;
  }

  render() {
    return html`
      <p>
        Component C
      </p>
    `;
  }
}

customElements.define('component-c', ComponentC);
