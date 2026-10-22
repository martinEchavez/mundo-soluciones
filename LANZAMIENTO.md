# Mundo Soluciones: pasos para lanzar

La página está en modo demostración: franja y marca de agua DEMO, sin indexar y con datos por
confirmar subrayados en dorado (clase `pendiente`).

## 1. Datos del cliente

- **Demo**: `JS/main.js` → `CONTACT_CONFIG.demo = false` quita la franja y la marca de agua.
- **Teléfonos**: `phone` (WhatsApp y botón principal) y `phone2`. Confirmar cuál de los dos tiene
  WhatsApp. Si cambian, actualizar también el texto visible (`phone-number`, `phone-number-2`)
  y `telephone` en el schema.
- **Horario, medios de pago, otros electrodomésticos y ferretería**: buscar `class="pendiente"`
  en `index.html`, poner el dato real y quitar la clase.
- Si cambian clases de Tailwind: `npm install` y `npm run build:css`.

## 2. Dominio (sugerido `mundosolucionesmonteria.com`)

1. Comprarlo y crear en el DNS:
   - `A` @ → 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - `CNAME` www → `martinechavez.github.io`
   - `TXT` @ → `v=spf1 -all` (el dominio no envía correo)
   - `TXT` _dmarc → `v=DMARC1; p=reject;`
2. Verificar el dominio en GitHub (Settings de la cuenta → Pages → Add a domain).
3. Crear el archivo `CNAME` con el dominio y activar **Enforce HTTPS**.

## 3. SEO

En `index.html`:
- `<meta name="robots">` → `index, follow`.
- Añadir `<link rel="canonical">` y `og:url` con el dominio.
- Cambiar `og:image` y el `image` del schema al dominio nuevo.
- Añadir `"url"`, `"openingHours"` y `"geo"` (coordenadas del local) al schema.

Crear `robots.txt` y `sitemap.xml` y enviar el sitemap en Google Search Console. Crear el perfil
de Google Business con la dirección del local: es lo que más ayuda a salir en "repuestos estufa
Montería".

## Reglas

- No usar "distribuidor autorizado", "oficial" ni sellos de terceros.
- No poner logos de fabricantes. Si se nombran marcas, agregar al pie el aviso de no afiliación.
