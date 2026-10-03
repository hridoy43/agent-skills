# Forms and validation

- Keep the user's validator and the project's convention. New TypeScript projects: the framework or Better-T-Stack default first, else Zod; Valibot or ArkType when bundle size, performance, or contracts matter. Other ecosystems use their standard validator.
- Require a Standard Schema-compatible validator (current Zod, Valibot, ArkType) so form libraries, routers, and RPC layers accept it without adapters.
- One validation library per project; none for trivial forms. Validation (Zod, Valibot, ArkType) and form state (React Hook Form, TanStack Form, native mechanisms) are separate choices; add a form library only for complex forms.
- Schemas live in `features/<feature>/schemas/`; shared contracts only with multiple consumers. Share a schema between form and server action when safe.
- Validate on the client for feedback and again at the server, action, handler, or storage boundary; client validation is never security or authorization. Keep input schemas apart from DTOs, domain models, and DB records when they differ; transform explicitly before persistence.
- Errors: typed field and form errors without internals; keep entered values, focus the first invalid field, associate labels and messages accessibly. Centralize error mapping; keep cross-field rules in the feature.
- Test required, malformed, length and range limits, cross-field rules, authorization failures, and server rejection.

```text
features/Customers/
  schemas/customerForm.schema.ts
  actions/createCustomer.action.ts
  components/CustomerForm.tsx
```
