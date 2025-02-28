# Reference

## Transactions

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">getTransactionsByCompany</a>(id) -> OpenLedgerClient.GetIdTransactionsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.getTransactionsByCompany("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">createANewTransaction</a>(id, { ...params }) -> OpenLedgerClient.Transaction</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.createANewTransaction("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**request:** `OpenLedgerClient.Transaction`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">editATransaction</a>(id, transactionId, { ...params }) -> OpenLedgerClient.Transaction</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.editATransaction("id", "transactionId", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**transactionId:** `string` — Transaction ID

</dd>
</dl>

<dl>
<dd>

**request:** `OpenLedgerClient.Transaction`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">exportTransaction</a>(id, { ...params }) -> OpenLedgerClient.ExportTransactionResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.exportTransaction("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**request:** `OpenLedgerClient.ExportTransactionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">getTransactionsByMonth</a>(id, month) -> OpenLedgerClient.GetTransactionsByMonthResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.getTransactionsByMonth("id", "month");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**month:** `string` — Month in YYYY-MM format

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">promptTransaction</a>(id) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.promptTransaction("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">classifyTransaction</a>(id) -> OpenLedgerClient.Transaction[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.classifyTransaction("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">generateGeneralLedger</a>(id) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.generateGeneralLedger("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">bulkCreateTransactions</a>(id, { ...params }) -> OpenLedgerClient.Transaction[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.bulkCreateTransactions("id", [{}]);
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**request:** `OpenLedgerClient.Transaction[]`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.transactions.<a href="/src/api/resources/transactions/client/Client.ts">suggestTransactionCategories</a>(id, { ...params }) -> OpenLedgerClient.SuggestTransactionCategoriesResponseItem[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.transactions.suggestTransactionCategories("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**request:** `OpenLedgerClient.SuggestTransactionCategoriesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Transactions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Companies

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">createCompany</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.createCompany();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `OpenLedgerClient.CreateCompanyRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Companies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">getCompany</a>(id) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.getCompany("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Companies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">updateCompany</a>(id, { ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.updateCompany("id", {
    key: "value",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**request:** `Record<string, unknown>`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Companies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.companies.<a href="/src/api/resources/companies/client/Client.ts">deleteCompany</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.companies.deleteCompany("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Companies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Categories

<details><summary><code>client.categories.<a href="/src/api/resources/categories/client/Client.ts">getCategoriesByCompany</a>(id) -> OpenLedgerClient.GetCategoriesByCompanyResponseItem[]</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.categories.getCategoriesByCompany("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Categories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.categories.<a href="/src/api/resources/categories/client/Client.ts">createCategory</a>(id, { ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.categories.createCategory("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Company ID

</dd>
</dl>

<dl>
<dd>

**request:** `OpenLedgerClient.CreateCategoryRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Categories.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
