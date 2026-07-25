# Forms and Validation

Use a maintained schema validator for user-input forms and every untrusted boundary.

## Selection

- Preserve the user’s explicit validator choice and the project’s healthy convention.
- For a new TypeScript project without a preference, use Zod unless the selected framework or Better-T-Stack template provides a compatible standard validator.
- For other ecosystems, use the platform’s maintained standard validator and serialization approach.
- Do not add multiple overlapping validation libraries.

## Ownership and flow

- Feature forms own their input schema under `features/<feature>/schemas/`.
- Shared schemas belong in shared contracts only when multiple real consumers need the same contract.
- Validate client-side for fast feedback, then validate again in the server action, API handler, command, storage, or other trusted boundary.
- Keep validation schemas separate from database models when input shape, optionality, or lifecycle differs.
- Transform validated input explicitly before persistence; never treat client validation as authorization or security.

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
