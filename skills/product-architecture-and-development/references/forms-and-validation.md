# Forms and Validation

Use a maintained schema validator for user-input forms and every untrusted boundary.

## Selection

- Preserve the user’s explicit validator choice and the project’s healthy convention.
- For a new TypeScript project without a preference, use Zod only when the selected framework or Better-T-Stack template does not provide a better compatible standard. Consider another maintained validator when bundle size, performance, generated contracts, or ecosystem conventions materially matter.
- For other ecosystems, use the platform’s maintained standard validator and serialization approach.
- Do not add multiple overlapping validation libraries.
- Do not add a schema validator to a trivial form that has no meaningful constraints.

Schema validation and form-state management are separate decisions. Zod, Valibot, ArkType, and similar tools validate data; React Hook Form, TanStack Form, and native framework mechanisms manage form state and submission. Add a form-state library only when the form’s complexity justifies it.

## Ownership and flow

- Feature forms own their input schema under `features/<feature>/schemas/`.
- Shared schemas belong in shared contracts only when multiple real consumers need the same contract.
- Validate client-side for fast feedback when useful, then validate again in the server action, API handler, command, storage, or other trusted boundary. Client validation is never authorization or security.
- Keep validation schemas separate from database models when input shape, optionality, or lifecycle differs.
- Transform validated input explicitly before persistence; never treat client validation as authorization or security.
- Do not force one schema to represent form input, transport DTOs, domain models, and database records when their contracts differ.

## Error behavior

- Return typed field-level and form-level errors without exposing secrets or internal stack details.
- Preserve entered values where safe, focus the first invalid field, and provide accessible labels, descriptions, and error associations.
- Centralize error-to-feedback mapping, but keep domain-specific recovery and cross-field rules with the feature.
- Test required fields, malformed values, length/range limits, cross-field invariants, authorization failures, and server rejection.

## Example TypeScript placement

```text
features/Customers/
├── schemas/
│   ├── customerForm.schema.ts
│   └── index.ts
├── actions/
│   └── createCustomer.action.ts
└── components/
    └── CustomerForm/
        └── index.tsx
```
