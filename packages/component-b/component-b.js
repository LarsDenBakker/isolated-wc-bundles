import { html, css, LitElement } from 'lit-element';

class ComponentB extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        padding: 8px;
        margin: 8px;
        border: 1px solid red;
      }
    `;
  }

  render() {
    return html`
      <p>
        Component B
      </p>
    `;
  }
}

customElements.define('component-b', ComponentB);
