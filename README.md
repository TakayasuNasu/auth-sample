# Auth Sampla App with Next.js

1. install NextAuth.js

   - `yarn add next-auth`
   - `yarn add --dev @types/next-auth`

2. Set environment variables(example)
   - ```
     COGNITO_CLIENT_ID=123456789
     COGNITO_CLIENT_SECRET=abcdefg
     COGNITO_DOMAIN=aws
     ```

## Atomic Design Sample

```bash
components
|--atoms
|  |--headline
|  |  |--h2.tsx
|  |  |--h3.tsx
|--molecules
|  |--input
|  |--list
|  |  |--dl.tsx
|--organisms
|  |--admin
|  |  |--header.tsx
|  |  |--layout.tsx
|  |--common
|  |  |--footer.tsx
|  |--front
|  |  |--header.tsx
|  |  |--layout.tsx
|  |--mypage
|  |  |--header.tsx
|  |  |--layout.tsx
```

## Mock API Server

1. Install VSCode extenstion of Swagger Editor.
   - [Swagger Viewer \- Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=Arjun.swagger-viewer)
1. Create yml file like `docs/sample.yml`.
1. Run the Command `Preview Swagger`.
1. Install Mock API Server as Prism
   - `yarn add --dev @stoplight/prism-cli`
1. write below code at script section in package.json
   - `"prism": "./node_modules/.bin/prism mock"`
1. Run Server
   - `yarn prism ./docs/sample.yml`
1. Access Server like `127.0.0.1:4010/students`

## Reference

- [Next\.js](https://nextjs.org/docs/getting-started)
- [NextAuth\.js](https://next-auth.js.org/getting-started/example)
- [Amazon Cognito| AWS](https://aws.amazon.com/cognito/)
- [Material\-UI](https://material-ui.com/)
- [CSS Grid Cheat Sheet Illustrated in 2021🎖️](https://dev.to/joyshaheb/css-grid-cheat-sheet-illustrated-in-2021-1a3)
- [Atomic Design\. Better and Faster React Apps](https://carlos-parreno.medium.com/atomic-design-thinking-154edb2d2a71)
- [CSS Reference](https://cssreference.io/)
- [OpenAPI Specification \- Version 3\.0\.3 \| Swagger](https://swagger.io/specification/)
