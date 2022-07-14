import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Blob: any;
  Date: any;
  GraphQLDocument: any;
  Long: any;
  Object: any;
  SHA256: any;
  StringOrInt: any;
  Timestamp: any;
  Void: any;
};

/** An organization. Can have multiple members and graphs. */
export type Account = {
  __typename?: 'Account';
  auditLogExports?: Maybe<Array<AuditLogExport>>;
  /** These are the roles that the account is able to use */
  availableRoles: Array<UserPermission>;
  /**
   * Get an URL to which an avatar image can be uploaded. Client uploads by sending a PUT request
   * with the image data to MediaUploadInfo.url. Client SHOULD set the "Content-Type" header to the
   * browser-inferred MIME type, and SHOULD set the "x-apollo-content-filename" header to the
   * filename, if such information is available. Client MUST set the "x-apollo-csrf-token" header to
   * MediaUploadInfo.csrfToken.
   */
  avatarUpload?: Maybe<AvatarUploadResult>;
  /**
   * Get an image URL for the account's avatar. Note that CORS is not enabled for these URLs. The size
   * argument is used for bandwidth reduction, and should be the size of the image as displayed in the
   * application. Apollo's media server will downscale larger images to at least the requested size,
   * but this will not happen for third-party media servers.
   */
  avatarUrl?: Maybe<Scalars['String']>;
  billingInfo?: Maybe<BillingInfo>;
  companyUrl?: Maybe<Scalars['String']>;
  currentBillingMonth?: Maybe<BillingMonth>;
  currentPlan: BillingPlan;
  currentPlanV2: BillingPlanV2;
  currentSubscription?: Maybe<BillingSubscription>;
  currentSubscriptionV2?: Maybe<BillingSubscriptionV2>;
  experimentalFeatures: AccountExperimentalFeatures;
  expiredTrialDismissedAt?: Maybe<Scalars['Timestamp']>;
  expiredTrialSubscription?: Maybe<BillingSubscription>;
  expiredTrialSubscriptionV2?: Maybe<BillingSubscriptionV2>;
  graphIDAvailable: Scalars['Boolean'];
  hasBeenOnTrial: Scalars['Boolean'];
  hasBeenOnTrialV2: Scalars['Boolean'];
  hasBillingInfo?: Maybe<Scalars['Boolean']>;
  /** Globally unique identifier, which isn't guaranteed stable (can be changed by administrators). */
  id: Scalars['ID'];
  /**
   * Internal immutable identifier for the account. Only visible to Apollo admins (because it really
   * shouldn't be used in normal client apps).
   */
  internalID: Scalars['ID'];
  invitations?: Maybe<Array<AccountInvitation>>;
  invoices?: Maybe<Array<Invoice>>;
  invoicesV2: Array<InvoiceV2>;
  isOnExpiredTrial: Scalars['Boolean'];
  isOnTrial: Scalars['Boolean'];
  legacyIsOnTrial: Scalars['Boolean'];
  memberships?: Maybe<Array<AccountMembership>>;
  /** Name of the organization, which can change over time and isn't unique. */
  name: Scalars['String'];
  provisionedAt?: Maybe<Scalars['Timestamp']>;
  recurlyEmail?: Maybe<Scalars['String']>;
  /** Returns a different registry related stats pertaining to this account. */
  registryStatsWindow?: Maybe<RegistryStatsWindow>;
  requests?: Maybe<Scalars['Long']>;
  requestsInCurrentBillingPeriod?: Maybe<Scalars['Long']>;
  roles?: Maybe<AccountRoles>;
  /** How many seats would be included in your next bill, as best estimated today */
  seatCountForNextBill?: Maybe<Scalars['Int']>;
  seats?: Maybe<Seats>;
  secondaryIDs: Array<Scalars['ID']>;
  /** Graphs belonging to this organization. */
  services: Array<Service>;
  /**
   * If non-null, this organization tracks its members through an upstream, eg PingOne;
   * invitations are not possible on SSO-synchronized account.
   */
  sso?: Maybe<OrganizationSso>;
  state?: Maybe<AccountState>;
  /** A list of reusable invitations for the organization. */
  staticInvitations?: Maybe<Array<OrganizationInviteLink>>;
  /** @deprecated use Account.statsWindow instead */
  stats: AccountStatsWindow;
  statsWindow?: Maybe<AccountStatsWindow>;
  subscriptions?: Maybe<Array<BillingSubscription>>;
  subscriptionsV2: Array<BillingSubscriptionV2>;
  /** Gets a ticket for this org, by id */
  ticket?: Maybe<ZendeskTicket>;
  /** List of Zendesk tickets submitted for this org */
  tickets?: Maybe<Array<ZendeskTicket>>;
};

/** An organization. Can have multiple members and graphs. */
export type AccountAvatarUrlArgs = {
  size?: Scalars['Int'];
};

/** An organization. Can have multiple members and graphs. */
export type AccountGraphIdAvailableArgs = {
  id: Scalars['ID'];
};

/** An organization. Can have multiple members and graphs. */
export type AccountInvitationsArgs = {
  includeAccepted?: Scalars['Boolean'];
};

/** An organization. Can have multiple members and graphs. */
export type AccountRegistryStatsWindowArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

/** An organization. Can have multiple members and graphs. */
export type AccountRequestsArgs = {
  from: Scalars['Timestamp'];
  to: Scalars['Timestamp'];
};

/** An organization. Can have multiple members and graphs. */
export type AccountServicesArgs = {
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
};

/** An organization. Can have multiple members and graphs. */
export type AccountStatsArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

/** An organization. Can have multiple members and graphs. */
export type AccountStatsWindowArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

/** An organization. Can have multiple members and graphs. */
export type AccountTicketArgs = {
  id: Scalars['ID'];
};

/** Columns of AccountBillingUsageStats. */
export enum AccountBillingUsageStatsColumn {
  AgentVersion = 'AGENT_VERSION',
  OperationCount = 'OPERATION_COUNT',
  OperationCountProvidedExplicitly = 'OPERATION_COUNT_PROVIDED_EXPLICITLY',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type AccountBillingUsageStatsDimensions = {
  __typename?: 'AccountBillingUsageStatsDimensions';
  agentVersion?: Maybe<Scalars['String']>;
  operationCountProvidedExplicitly?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountBillingUsageStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountBillingUsageStatsFilter = {
  /** Selects rows whose agentVersion dimension equals the given value if not null. To query for the null value, use {in: {agentVersion: [null]}} instead. */
  agentVersion?: InputMaybe<Scalars['String']>;
  and?: InputMaybe<Array<AccountBillingUsageStatsFilter>>;
  in?: InputMaybe<AccountBillingUsageStatsFilterIn>;
  not?: InputMaybe<AccountBillingUsageStatsFilter>;
  /** Selects rows whose operationCountProvidedExplicitly dimension equals the given value if not null. To query for the null value, use {in: {operationCountProvidedExplicitly: [null]}} instead. */
  operationCountProvidedExplicitly?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<AccountBillingUsageStatsFilter>>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountBillingUsageStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountBillingUsageStatsFilterIn = {
  /** Selects rows whose agentVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  agentVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose operationCountProvidedExplicitly dimension is in the given list. A null value in the list means a row with null for that dimension. */
  operationCountProvidedExplicitly?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountBillingUsageStatsMetrics = {
  __typename?: 'AccountBillingUsageStatsMetrics';
  operationCount: Scalars['Long'];
};

export type AccountBillingUsageStatsOrderBySpec = {
  column: AccountBillingUsageStatsColumn;
  direction: Ordering;
};

export type AccountBillingUsageStatsRecord = {
  __typename?: 'AccountBillingUsageStatsRecord';
  /** Dimensions of AccountBillingUsageStats that can be grouped by. */
  groupBy: AccountBillingUsageStatsDimensions;
  /** Metrics of AccountBillingUsageStats that can be aggregated over. */
  metrics: AccountBillingUsageStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type AccountChecksStatsMetrics = {
  __typename?: 'AccountChecksStatsMetrics';
  totalFailedChecks: Scalars['Long'];
  totalSuccessfulChecks: Scalars['Long'];
};

export type AccountChecksStatsRecord = {
  __typename?: 'AccountChecksStatsRecord';
  id: Scalars['ID'];
  metrics: AccountChecksStatsMetrics;
  timestamp: Scalars['Timestamp'];
};

/** Columns of AccountEdgeServerInfos. */
export enum AccountEdgeServerInfosColumn {
  BootId = 'BOOT_ID',
  ExecutableSchemaId = 'EXECUTABLE_SCHEMA_ID',
  LibraryVersion = 'LIBRARY_VERSION',
  Platform = 'PLATFORM',
  RuntimeVersion = 'RUNTIME_VERSION',
  SchemaTag = 'SCHEMA_TAG',
  ServerId = 'SERVER_ID',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  UserVersion = 'USER_VERSION',
}

export type AccountEdgeServerInfosDimensions = {
  __typename?: 'AccountEdgeServerInfosDimensions';
  bootId?: Maybe<Scalars['ID']>;
  executableSchemaId?: Maybe<Scalars['ID']>;
  libraryVersion?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  runtimeVersion?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serverId?: Maybe<Scalars['ID']>;
  serviceId?: Maybe<Scalars['ID']>;
  userVersion?: Maybe<Scalars['String']>;
};

/** Filter for data in AccountEdgeServerInfos. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountEdgeServerInfosFilter = {
  and?: InputMaybe<Array<AccountEdgeServerInfosFilter>>;
  /** Selects rows whose bootId dimension equals the given value if not null. To query for the null value, use {in: {bootId: [null]}} instead. */
  bootId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose executableSchemaId dimension equals the given value if not null. To query for the null value, use {in: {executableSchemaId: [null]}} instead. */
  executableSchemaId?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<AccountEdgeServerInfosFilterIn>;
  /** Selects rows whose libraryVersion dimension equals the given value if not null. To query for the null value, use {in: {libraryVersion: [null]}} instead. */
  libraryVersion?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<AccountEdgeServerInfosFilter>;
  or?: InputMaybe<Array<AccountEdgeServerInfosFilter>>;
  /** Selects rows whose platform dimension equals the given value if not null. To query for the null value, use {in: {platform: [null]}} instead. */
  platform?: InputMaybe<Scalars['String']>;
  /** Selects rows whose runtimeVersion dimension equals the given value if not null. To query for the null value, use {in: {runtimeVersion: [null]}} instead. */
  runtimeVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serverId dimension equals the given value if not null. To query for the null value, use {in: {serverId: [null]}} instead. */
  serverId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose userVersion dimension equals the given value if not null. To query for the null value, use {in: {userVersion: [null]}} instead. */
  userVersion?: InputMaybe<Scalars['String']>;
};

/** Filter for data in AccountEdgeServerInfos. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountEdgeServerInfosFilterIn = {
  /** Selects rows whose bootId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  bootId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose executableSchemaId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  executableSchemaId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose libraryVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  libraryVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose platform dimension is in the given list. A null value in the list means a row with null for that dimension. */
  platform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose runtimeVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  runtimeVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serverId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serverId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose userVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  userVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type AccountEdgeServerInfosOrderBySpec = {
  column: AccountEdgeServerInfosColumn;
  direction: Ordering;
};

export type AccountEdgeServerInfosRecord = {
  __typename?: 'AccountEdgeServerInfosRecord';
  /** Dimensions of AccountEdgeServerInfos that can be grouped by. */
  groupBy: AccountEdgeServerInfosDimensions;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of AccountErrorStats. */
export enum AccountErrorStatsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  ErrorsCount = 'ERRORS_COUNT',
  Path = 'PATH',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  RequestsWithErrorsCount = 'REQUESTS_WITH_ERRORS_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type AccountErrorStatsDimensions = {
  __typename?: 'AccountErrorStatsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountErrorStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountErrorStatsFilter = {
  and?: InputMaybe<Array<AccountErrorStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountErrorStatsFilterIn>;
  not?: InputMaybe<AccountErrorStatsFilter>;
  or?: InputMaybe<Array<AccountErrorStatsFilter>>;
  /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
  path?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountErrorStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountErrorStatsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountErrorStatsMetrics = {
  __typename?: 'AccountErrorStatsMetrics';
  errorsCount: Scalars['Long'];
  requestsWithErrorsCount: Scalars['Long'];
};

export type AccountErrorStatsOrderBySpec = {
  column: AccountErrorStatsColumn;
  direction: Ordering;
};

export type AccountErrorStatsRecord = {
  __typename?: 'AccountErrorStatsRecord';
  /** Dimensions of AccountErrorStats that can be grouped by. */
  groupBy: AccountErrorStatsDimensions;
  /** Metrics of AccountErrorStats that can be aggregated over. */
  metrics: AccountErrorStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type AccountExperimentalFeatures = {
  __typename?: 'AccountExperimentalFeatures';
  auditLogs: Scalars['Boolean'];
  championDashboard: Scalars['Boolean'];
  federation2Preview: Scalars['Boolean'];
  preRequestPreview: Scalars['Boolean'];
  publicVariants: Scalars['Boolean'];
  variantHomepage: Scalars['Boolean'];
  webhooksPreview: Scalars['Boolean'];
};

/** Columns of AccountFieldExecutions. */
export enum AccountFieldExecutionsColumn {
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ObservedExecutionCount = 'OBSERVED_EXECUTION_COUNT',
  ParentType = 'PARENT_TYPE',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type AccountFieldExecutionsDimensions = {
  __typename?: 'AccountFieldExecutionsDimensions';
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldExecutions. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountFieldExecutionsFilter = {
  and?: InputMaybe<Array<AccountFieldExecutionsFilter>>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountFieldExecutionsFilterIn>;
  not?: InputMaybe<AccountFieldExecutionsFilter>;
  or?: InputMaybe<Array<AccountFieldExecutionsFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldExecutions. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountFieldExecutionsFilterIn = {
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountFieldExecutionsMetrics = {
  __typename?: 'AccountFieldExecutionsMetrics';
  estimatedExecutionCount: Scalars['Long'];
  observedExecutionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type AccountFieldExecutionsOrderBySpec = {
  column: AccountFieldExecutionsColumn;
  direction: Ordering;
};

export type AccountFieldExecutionsRecord = {
  __typename?: 'AccountFieldExecutionsRecord';
  /** Dimensions of AccountFieldExecutions that can be grouped by. */
  groupBy: AccountFieldExecutionsDimensions;
  /** Metrics of AccountFieldExecutions that can be aggregated over. */
  metrics: AccountFieldExecutionsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of AccountFieldLatencies. */
export enum AccountFieldLatenciesColumn {
  FieldHistogram = 'FIELD_HISTOGRAM',
  FieldName = 'FIELD_NAME',
  ParentType = 'PARENT_TYPE',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type AccountFieldLatenciesDimensions = {
  __typename?: 'AccountFieldLatenciesDimensions';
  field?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldLatencies. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountFieldLatenciesFilter = {
  and?: InputMaybe<Array<AccountFieldLatenciesFilter>>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountFieldLatenciesFilterIn>;
  not?: InputMaybe<AccountFieldLatenciesFilter>;
  or?: InputMaybe<Array<AccountFieldLatenciesFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldLatencies. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountFieldLatenciesFilterIn = {
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountFieldLatenciesMetrics = {
  __typename?: 'AccountFieldLatenciesMetrics';
  fieldHistogram: DurationHistogram;
};

export type AccountFieldLatenciesOrderBySpec = {
  column: AccountFieldLatenciesColumn;
  direction: Ordering;
};

export type AccountFieldLatenciesRecord = {
  __typename?: 'AccountFieldLatenciesRecord';
  /** Dimensions of AccountFieldLatencies that can be grouped by. */
  groupBy: AccountFieldLatenciesDimensions;
  /** Metrics of AccountFieldLatencies that can be aggregated over. */
  metrics: AccountFieldLatenciesMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of AccountFieldRequestsByClientVersion. */
export enum AccountFieldRequestsByClientVersionColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ObservedExecutionCount = 'OBSERVED_EXECUTION_COUNT',
  ParentType = 'PARENT_TYPE',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type AccountFieldRequestsByClientVersionDimensions = {
  __typename?: 'AccountFieldRequestsByClientVersionDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldRequestsByClientVersion. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountFieldRequestsByClientVersionFilter = {
  and?: InputMaybe<Array<AccountFieldRequestsByClientVersionFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountFieldRequestsByClientVersionFilterIn>;
  not?: InputMaybe<AccountFieldRequestsByClientVersionFilter>;
  or?: InputMaybe<Array<AccountFieldRequestsByClientVersionFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldRequestsByClientVersion. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountFieldRequestsByClientVersionFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountFieldRequestsByClientVersionMetrics = {
  __typename?: 'AccountFieldRequestsByClientVersionMetrics';
  estimatedExecutionCount: Scalars['Long'];
  observedExecutionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type AccountFieldRequestsByClientVersionOrderBySpec = {
  column: AccountFieldRequestsByClientVersionColumn;
  direction: Ordering;
};

export type AccountFieldRequestsByClientVersionRecord = {
  __typename?: 'AccountFieldRequestsByClientVersionRecord';
  /** Dimensions of AccountFieldRequestsByClientVersion that can be grouped by. */
  groupBy: AccountFieldRequestsByClientVersionDimensions;
  /** Metrics of AccountFieldRequestsByClientVersion that can be aggregated over. */
  metrics: AccountFieldRequestsByClientVersionMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of AccountFieldUsage. */
export enum AccountFieldUsageColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  ExecutionCount = 'EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ParentType = 'PARENT_TYPE',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type AccountFieldUsageDimensions = {
  __typename?: 'AccountFieldUsageDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldUsage. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountFieldUsageFilter = {
  and?: InputMaybe<Array<AccountFieldUsageFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountFieldUsageFilterIn>;
  not?: InputMaybe<AccountFieldUsageFilter>;
  or?: InputMaybe<Array<AccountFieldUsageFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountFieldUsage. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountFieldUsageFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountFieldUsageMetrics = {
  __typename?: 'AccountFieldUsageMetrics';
  estimatedExecutionCount: Scalars['Long'];
  executionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type AccountFieldUsageOrderBySpec = {
  column: AccountFieldUsageColumn;
  direction: Ordering;
};

export type AccountFieldUsageRecord = {
  __typename?: 'AccountFieldUsageRecord';
  /** Dimensions of AccountFieldUsage that can be grouped by. */
  groupBy: AccountFieldUsageDimensions;
  /** Metrics of AccountFieldUsage that can be aggregated over. */
  metrics: AccountFieldUsageMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type AccountInvitation = {
  __typename?: 'AccountInvitation';
  /** An accepted invitation cannot be used anymore */
  acceptedAt?: Maybe<Scalars['Timestamp']>;
  /** Who accepted the invitation */
  acceptedBy?: Maybe<User>;
  /** Time the invitation was created */
  createdAt: Scalars['Timestamp'];
  /** Who created the invitation */
  createdBy?: Maybe<User>;
  email: Scalars['String'];
  id: Scalars['ID'];
  /** Last time we sent an email for the invitation */
  lastSentAt?: Maybe<Scalars['Timestamp']>;
  /** Access role for the invitee */
  role: UserPermission;
};

export type AccountMembership = {
  __typename?: 'AccountMembership';
  account: Account;
  createdAt: Scalars['Timestamp'];
  /** If this membership is a free seat (based on role) */
  free?: Maybe<Scalars['Boolean']>;
  permission: UserPermission;
  user: User;
};

export type AccountMutation = {
  __typename?: 'AccountMutation';
  auditExport?: Maybe<AuditLogExportMutation>;
  /** Cancel a pending change from an annual team subscription to a monthly team subscription when the current period expires. */
  cancelConvertAnnualTeamSubscriptionToMonthlyAtNextPeriod?: Maybe<Account>;
  /** Cancel a pending change from an annual team subscription to a monthly team subscription when the current period expires. */
  cancelConvertAnnualTeamSubscriptionToMonthlyAtNextPeriodV2?: Maybe<Account>;
  /** Cancel account subscriptions, subscriptions will remain active until the end of the paid period */
  cancelSubscriptions?: Maybe<Account>;
  /** Cancel account subscriptions, subscriptions will remain active until the end of the paid period */
  cancelSubscriptionsV2?: Maybe<Account>;
  /** Changes an annual team subscription to a monthly team subscription when the current period expires. */
  convertAnnualTeamSubscriptionToMonthlyAtNextPeriod?: Maybe<Account>;
  /** Changes an annual team subscription to a monthly team subscription when the current period expires. */
  convertAnnualTeamSubscriptionToMonthlyAtNextPeriodV2?: Maybe<Account>;
  /** Changes a monthly team subscription to an annual team subscription. */
  convertMonthlyTeamSubscriptionToAnnual?: Maybe<Account>;
  /** Changes a monthly team subscription to an annual team subscription. */
  convertMonthlyTeamSubscriptionToAnnualV2?: Maybe<Account>;
  createStaticInvitation?: Maybe<OrganizationInviteLink>;
  /** Delete the account's avatar. Requires Account.canUpdateAvatar to be true. */
  deleteAvatar?: Maybe<AvatarDeleteError>;
  /** Acknowledge that a trial has expired and return to community */
  dismissExpiredTrial?: Maybe<Account>;
  /** Apollo admins only: extend an ongoing trial */
  extendTrial?: Maybe<Account>;
  /** Apollo admins only: extend an ongoing trial */
  extendTrialV2?: Maybe<Account>;
  /** Hard delete an account and all associated services */
  hardDelete?: Maybe<Scalars['Void']>;
  hasBillingInfo?: Maybe<Scalars['Boolean']>;
  internalID?: Maybe<Scalars['String']>;
  /** Send an invitation to join the account by E-mail */
  invite?: Maybe<AccountInvitation>;
  name: Scalars['String'];
  /** Reactivate a canceled current subscription */
  reactivateCurrentSubscription?: Maybe<Account>;
  /** Reactivate a canceled current subscription */
  reactivateCurrentSubscriptionV2?: Maybe<Account>;
  /** Refresh billing information from third-party billing service */
  refreshBilling?: Maybe<Scalars['Void']>;
  /** Delete an invitation */
  removeInvitation?: Maybe<Scalars['Void']>;
  /** Remove a member of the account */
  removeMember?: Maybe<Account>;
  requestAuditExport?: Maybe<Account>;
  /** Send a new E-mail for an existing invitation */
  resendInvitation?: Maybe<AccountInvitation>;
  revokeStaticInvitation?: Maybe<OrganizationInviteLink>;
  seatCountForNextBill?: Maybe<Scalars['Int']>;
  /** Apollo admins only: set the billing plan to an arbitrary plan */
  setPlan?: Maybe<Scalars['Void']>;
  /** Apollo admins only: set the billing plan to an arbitrary plan */
  setPlanV2?: Maybe<Account>;
  /** Start a new team subscription with the given billing period */
  startTeamSubscription?: Maybe<Account>;
  /** Start a new team subscription with the given billing period */
  startTeamSubscriptionV2?: Maybe<Account>;
  /** Start a team trial */
  startTrial?: Maybe<Account>;
  /** Start a team trial */
  startTrialV2?: Maybe<Account>;
  /** This is called by the form shown to users after they cancel their team subscription. */
  submitTeamCancellationFeedback?: Maybe<Scalars['Void']>;
  /** Apollo admins only: terminate any ongoing subscriptions in the account, without refunds */
  terminateSubscriptions?: Maybe<Account>;
  /** Apollo admins only: terminate any ongoing subscriptions in the account, without refunds */
  terminateSubscriptionsV2?: Maybe<Account>;
  /** Update the billing address for a Recurly token */
  updateBillingAddress?: Maybe<Account>;
  /** Update the billing information from a Recurly token */
  updateBillingInfo?: Maybe<Scalars['Void']>;
  updateCompanyUrl?: Maybe<Account>;
  /** Set the E-mail address of the account, used notably for billing */
  updateEmail?: Maybe<Scalars['Void']>;
  /** Update the account ID */
  updateID?: Maybe<Account>;
  /** Update the company name */
  updateName?: Maybe<Scalars['Void']>;
  /** Apollo admins only: enable or disable an account for PingOne SSO login */
  updatePingOneSSOIDPID?: Maybe<Account>;
  /** Updates the role assigned to new SSO users. */
  updateSSODefaultRole?: Maybe<OrganizationSso>;
  /** A (currently) internal to Apollo mutation to update a user's role within an organization */
  updateUserPermission?: Maybe<User>;
};

export type AccountMutationAuditExportArgs = {
  id: Scalars['String'];
};

export type AccountMutationCreateStaticInvitationArgs = {
  role: UserPermission;
};

export type AccountMutationExtendTrialArgs = {
  to: Scalars['Timestamp'];
};

export type AccountMutationExtendTrialV2Args = {
  to: Scalars['Timestamp'];
};

export type AccountMutationInviteArgs = {
  email: Scalars['String'];
  role?: InputMaybe<UserPermission>;
};

export type AccountMutationRemoveInvitationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AccountMutationRemoveMemberArgs = {
  id: Scalars['ID'];
};

export type AccountMutationRequestAuditExportArgs = {
  actors?: InputMaybe<Array<ActorInput>>;
  from: Scalars['Timestamp'];
  graphIds?: InputMaybe<Array<Scalars['String']>>;
  to: Scalars['Timestamp'];
};

export type AccountMutationResendInvitationArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type AccountMutationRevokeStaticInvitationArgs = {
  token: Scalars['String'];
};

export type AccountMutationSetPlanArgs = {
  id: Scalars['ID'];
};

export type AccountMutationSetPlanV2Args = {
  id: Scalars['ID'];
};

export type AccountMutationStartTeamSubscriptionArgs = {
  billingPeriod: BillingPeriod;
};

export type AccountMutationStartTeamSubscriptionV2Args = {
  billingPeriod: BillingPeriod;
};

export type AccountMutationSubmitTeamCancellationFeedbackArgs = {
  feedback: Scalars['String'];
};

export type AccountMutationUpdateBillingAddressArgs = {
  billingAddress: BillingAddressInput;
};

export type AccountMutationUpdateBillingInfoArgs = {
  token: Scalars['String'];
};

export type AccountMutationUpdateCompanyUrlArgs = {
  companyUrl?: InputMaybe<Scalars['String']>;
};

export type AccountMutationUpdateEmailArgs = {
  email: Scalars['String'];
};

export type AccountMutationUpdateIdArgs = {
  id: Scalars['ID'];
};

export type AccountMutationUpdateNameArgs = {
  name: Scalars['String'];
};

export type AccountMutationUpdatePingOneSsoidpidArgs = {
  idpid?: InputMaybe<Scalars['String']>;
};

export type AccountMutationUpdateSsoDefaultRoleArgs = {
  role: UserPermission;
};

export type AccountMutationUpdateUserPermissionArgs = {
  permission: UserPermission;
  userID: Scalars['ID'];
};

/** Columns of AccountOperationCheckStats. */
export enum AccountOperationCheckStatsColumn {
  CachedRequestsCount = 'CACHED_REQUESTS_COUNT',
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  UncachedRequestsCount = 'UNCACHED_REQUESTS_COUNT',
}

export type AccountOperationCheckStatsDimensions = {
  __typename?: 'AccountOperationCheckStatsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountOperationCheckStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountOperationCheckStatsFilter = {
  and?: InputMaybe<Array<AccountOperationCheckStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountOperationCheckStatsFilterIn>;
  not?: InputMaybe<AccountOperationCheckStatsFilter>;
  or?: InputMaybe<Array<AccountOperationCheckStatsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountOperationCheckStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountOperationCheckStatsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountOperationCheckStatsMetrics = {
  __typename?: 'AccountOperationCheckStatsMetrics';
  cachedRequestsCount: Scalars['Long'];
  uncachedRequestsCount: Scalars['Long'];
};

export type AccountOperationCheckStatsOrderBySpec = {
  column: AccountOperationCheckStatsColumn;
  direction: Ordering;
};

export type AccountOperationCheckStatsRecord = {
  __typename?: 'AccountOperationCheckStatsRecord';
  /** Dimensions of AccountOperationCheckStats that can be grouped by. */
  groupBy: AccountOperationCheckStatsDimensions;
  /** Metrics of AccountOperationCheckStats that can be aggregated over. */
  metrics: AccountOperationCheckStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type AccountPublishesStatsMetrics = {
  __typename?: 'AccountPublishesStatsMetrics';
  totalPublishes: Scalars['Long'];
};

export type AccountPublishesStatsRecord = {
  __typename?: 'AccountPublishesStatsRecord';
  id: Scalars['ID'];
  metrics: AccountPublishesStatsMetrics;
  timestamp: Scalars['Timestamp'];
};

/** Columns of AccountQueryStats. */
export enum AccountQueryStatsColumn {
  CachedHistogram = 'CACHED_HISTOGRAM',
  CachedRequestsCount = 'CACHED_REQUESTS_COUNT',
  CacheTtlHistogram = 'CACHE_TTL_HISTOGRAM',
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  ForbiddenOperationCount = 'FORBIDDEN_OPERATION_COUNT',
  FromEngineproxy = 'FROM_ENGINEPROXY',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  RegisteredOperationCount = 'REGISTERED_OPERATION_COUNT',
  RequestsWithErrorsCount = 'REQUESTS_WITH_ERRORS_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  UncachedHistogram = 'UNCACHED_HISTOGRAM',
  UncachedRequestsCount = 'UNCACHED_REQUESTS_COUNT',
}

export type AccountQueryStatsDimensions = {
  __typename?: 'AccountQueryStatsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fromEngineproxy?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  querySignature?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountQueryStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountQueryStatsFilter = {
  and?: InputMaybe<Array<AccountQueryStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fromEngineproxy dimension equals the given value if not null. To query for the null value, use {in: {fromEngineproxy: [null]}} instead. */
  fromEngineproxy?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountQueryStatsFilterIn>;
  not?: InputMaybe<AccountQueryStatsFilter>;
  or?: InputMaybe<Array<AccountQueryStatsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountQueryStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountQueryStatsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fromEngineproxy dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fromEngineproxy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountQueryStatsMetrics = {
  __typename?: 'AccountQueryStatsMetrics';
  cacheTtlHistogram: DurationHistogram;
  cachedHistogram: DurationHistogram;
  cachedRequestsCount: Scalars['Long'];
  forbiddenOperationCount: Scalars['Long'];
  registeredOperationCount: Scalars['Long'];
  requestsWithErrorsCount: Scalars['Long'];
  totalLatencyHistogram: DurationHistogram;
  totalRequestCount: Scalars['Long'];
  uncachedHistogram: DurationHistogram;
  uncachedRequestsCount: Scalars['Long'];
};

export type AccountQueryStatsOrderBySpec = {
  column: AccountQueryStatsColumn;
  direction: Ordering;
};

export type AccountQueryStatsRecord = {
  __typename?: 'AccountQueryStatsRecord';
  /** Dimensions of AccountQueryStats that can be grouped by. */
  groupBy: AccountQueryStatsDimensions;
  /** Metrics of AccountQueryStats that can be aggregated over. */
  metrics: AccountQueryStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type AccountRoles = {
  __typename?: 'AccountRoles';
  canAudit: Scalars['Boolean'];
  canCreateDevGraph: Scalars['Boolean'];
  canCreateService: Scalars['Boolean'];
  canDelete: Scalars['Boolean'];
  /** @deprecated Use canQueryBillingInfo instead */
  canDownloadInvoice: Scalars['Boolean'];
  canManageMembers: Scalars['Boolean'];
  canQuery: Scalars['Boolean'];
  canQueryAudit: Scalars['Boolean'];
  canQueryBillingInfo: Scalars['Boolean'];
  /** @deprecated Use canQueryBillingInfo instead */
  canQueryInvoices: Scalars['Boolean'];
  canQueryMembers: Scalars['Boolean'];
  canQueryStats: Scalars['Boolean'];
  canReadTickets: Scalars['Boolean'];
  canRemoveMembers: Scalars['Boolean'];
  canSetConstrainedPlan: Scalars['Boolean'];
  canUpdateBillingInfo: Scalars['Boolean'];
  canUpdateMetadata: Scalars['Boolean'];
};

export enum AccountState {
  Active = 'ACTIVE',
  Closed = 'CLOSED',
  Unknown = 'UNKNOWN',
  Unprovisioned = 'UNPROVISIONED',
}

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindow = {
  __typename?: 'AccountStatsWindow';
  billingUsageStats: Array<AccountBillingUsageStatsRecord>;
  edgeServerInfos: Array<AccountEdgeServerInfosRecord>;
  errorStats: Array<AccountErrorStatsRecord>;
  fieldExecutions: Array<AccountFieldExecutionsRecord>;
  fieldLatencies: Array<AccountFieldLatenciesRecord>;
  fieldRequestsByClientVersion: Array<AccountFieldRequestsByClientVersionRecord>;
  fieldUsage: Array<AccountFieldUsageRecord>;
  operationCheckStats: Array<AccountOperationCheckStatsRecord>;
  queryStats: Array<AccountQueryStatsRecord>;
  /** From field rounded down to the nearest resolution. */
  roundedDownFrom: Scalars['Timestamp'];
  /** To field rounded up to the nearest resolution. */
  roundedUpTo: Scalars['Timestamp'];
  tracePathErrorsRefs: Array<AccountTracePathErrorsRefsRecord>;
  traceRefs: Array<AccountTraceRefsRecord>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowBillingUsageStatsArgs = {
  filter?: InputMaybe<AccountBillingUsageStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountBillingUsageStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowEdgeServerInfosArgs = {
  filter?: InputMaybe<AccountEdgeServerInfosFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountEdgeServerInfosOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowErrorStatsArgs = {
  filter?: InputMaybe<AccountErrorStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountErrorStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowFieldExecutionsArgs = {
  filter?: InputMaybe<AccountFieldExecutionsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountFieldExecutionsOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowFieldLatenciesArgs = {
  filter?: InputMaybe<AccountFieldLatenciesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountFieldLatenciesOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowFieldRequestsByClientVersionArgs = {
  filter?: InputMaybe<AccountFieldRequestsByClientVersionFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountFieldRequestsByClientVersionOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowFieldUsageArgs = {
  filter?: InputMaybe<AccountFieldUsageFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountFieldUsageOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowOperationCheckStatsArgs = {
  filter?: InputMaybe<AccountOperationCheckStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountOperationCheckStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowQueryStatsArgs = {
  filter?: InputMaybe<AccountQueryStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountQueryStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowTracePathErrorsRefsArgs = {
  filter?: InputMaybe<AccountTracePathErrorsRefsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountTracePathErrorsRefsOrderBySpec>>;
};

/** A time window with a specified granularity over a given account. */
export type AccountStatsWindowTraceRefsArgs = {
  filter?: InputMaybe<AccountTraceRefsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AccountTraceRefsOrderBySpec>>;
};

/** Columns of AccountTracePathErrorsRefs. */
export enum AccountTracePathErrorsRefsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  DurationBucket = 'DURATION_BUCKET',
  ErrorsCountInPath = 'ERRORS_COUNT_IN_PATH',
  ErrorsCountInTrace = 'ERRORS_COUNT_IN_TRACE',
  ErrorMessage = 'ERROR_MESSAGE',
  Path = 'PATH',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  TraceHttpStatusCode = 'TRACE_HTTP_STATUS_CODE',
  TraceId = 'TRACE_ID',
  TraceSizeBytes = 'TRACE_SIZE_BYTES',
  TraceStartsAt = 'TRACE_STARTS_AT',
}

export type AccountTracePathErrorsRefsDimensions = {
  __typename?: 'AccountTracePathErrorsRefsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  durationBucket?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
  traceHttpStatusCode?: Maybe<Scalars['Int']>;
  traceId?: Maybe<Scalars['ID']>;
  traceStartsAt?: Maybe<Scalars['Timestamp']>;
};

/** Filter for data in AccountTracePathErrorsRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountTracePathErrorsRefsFilter = {
  and?: InputMaybe<Array<AccountTracePathErrorsRefsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
  durationBucket?: InputMaybe<Scalars['Int']>;
  /** Selects rows whose errorMessage dimension equals the given value if not null. To query for the null value, use {in: {errorMessage: [null]}} instead. */
  errorMessage?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<AccountTracePathErrorsRefsFilterIn>;
  not?: InputMaybe<AccountTracePathErrorsRefsFilter>;
  or?: InputMaybe<Array<AccountTracePathErrorsRefsFilter>>;
  /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
  path?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose traceHttpStatusCode dimension equals the given value if not null. To query for the null value, use {in: {traceHttpStatusCode: [null]}} instead. */
  traceHttpStatusCode?: InputMaybe<Scalars['Int']>;
  /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
  traceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountTracePathErrorsRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountTracePathErrorsRefsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
  durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose errorMessage dimension is in the given list. A null value in the list means a row with null for that dimension. */
  errorMessage?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose traceHttpStatusCode dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceHttpStatusCode?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountTracePathErrorsRefsMetrics = {
  __typename?: 'AccountTracePathErrorsRefsMetrics';
  errorsCountInPath: Scalars['Long'];
  errorsCountInTrace: Scalars['Long'];
  traceSizeBytes: Scalars['Long'];
};

export type AccountTracePathErrorsRefsOrderBySpec = {
  column: AccountTracePathErrorsRefsColumn;
  direction: Ordering;
};

export type AccountTracePathErrorsRefsRecord = {
  __typename?: 'AccountTracePathErrorsRefsRecord';
  /** Dimensions of AccountTracePathErrorsRefs that can be grouped by. */
  groupBy: AccountTracePathErrorsRefsDimensions;
  /** Metrics of AccountTracePathErrorsRefs that can be aggregated over. */
  metrics: AccountTracePathErrorsRefsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of AccountTraceRefs. */
export enum AccountTraceRefsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  DurationBucket = 'DURATION_BUCKET',
  DurationNs = 'DURATION_NS',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  TraceId = 'TRACE_ID',
  TraceSizeBytes = 'TRACE_SIZE_BYTES',
}

export type AccountTraceRefsDimensions = {
  __typename?: 'AccountTraceRefsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  durationBucket?: Maybe<Scalars['Int']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  querySignature?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
  traceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in AccountTraceRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type AccountTraceRefsFilter = {
  and?: InputMaybe<Array<AccountTraceRefsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
  durationBucket?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<AccountTraceRefsFilterIn>;
  not?: InputMaybe<AccountTraceRefsFilter>;
  or?: InputMaybe<Array<AccountTraceRefsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
  traceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in AccountTraceRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type AccountTraceRefsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
  durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type AccountTraceRefsMetrics = {
  __typename?: 'AccountTraceRefsMetrics';
  durationNs: Scalars['Long'];
  traceSizeBytes: Scalars['Long'];
};

export type AccountTraceRefsOrderBySpec = {
  column: AccountTraceRefsColumn;
  direction: Ordering;
};

export type AccountTraceRefsRecord = {
  __typename?: 'AccountTraceRefsRecord';
  /** Dimensions of AccountTraceRefs that can be grouped by. */
  groupBy: AccountTraceRefsDimensions;
  /** Metrics of AccountTraceRefs that can be aggregated over. */
  metrics: AccountTraceRefsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Represents an actor that performs actions in Apollo Studio. Most actors are either a `USER` or a `GRAPH` (based on a request's provided API key), and they have the corresponding `ActorType`. */
export type Actor = {
  __typename?: 'Actor';
  actorId: Scalars['ID'];
  type: ActorType;
};

export type ActorInput = {
  actorId: Scalars['ID'];
  type: ActorType;
};

export enum ActorType {
  AnonymousUser = 'ANONYMOUS_USER',
  Backfill = 'BACKFILL',
  Cron = 'CRON',
  Graph = 'GRAPH',
  InternalIdentity = 'INTERNAL_IDENTITY',
  Synchronization = 'SYNCHRONIZATION',
  System = 'SYSTEM',
  User = 'USER',
}

export type AddOperationCollectionEntryResult =
  | OperationCollectionEntry
  | PermissionError
  | ValidationError;

export type AddOperationCollectionToVariantResult =
  | GraphVariant
  | InvalidTarget
  | PermissionError
  | ValidationError;

export type AffectedClient = {
  __typename?: 'AffectedClient';
  /**
   * ID, often the name, of the client set by the user and reported alongside metrics
   * @deprecated Unsupported.
   */
  clientReferenceId?: Maybe<Scalars['ID']>;
  /**
   * version of the client set by the user and reported alongside metrics
   * @deprecated Unsupported.
   */
  clientVersion?: Maybe<Scalars['String']>;
};

export type AffectedQuery = {
  __typename?: 'AffectedQuery';
  /** If the operation would be approved if the check ran again. Returns null if queried from SchemaDiff.changes.affectedQueries.alreadyApproved */
  alreadyApproved?: Maybe<Scalars['Boolean']>;
  /** If the operation would be ignored if the check ran again */
  alreadyIgnored?: Maybe<Scalars['Boolean']>;
  /** List of changes affecting this query. Returns null if queried from SchemaDiff.changes.affectedQueries.changes */
  changes?: Maybe<Array<ChangeOnOperation>>;
  /** Name to display to the user for the operation */
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  /** Determines if this query validates against the proposed schema */
  isValid?: Maybe<Scalars['Boolean']>;
  /** Whether this operation was ignored and its severity was downgraded for that reason */
  markedAsIgnored?: Maybe<Scalars['Boolean']>;
  /** Whether the changes were marked as safe and its severity was downgraded for that reason */
  markedAsSafe?: Maybe<Scalars['Boolean']>;
  /** Name provided for the operation, which can be empty string if it is an anonymous operation */
  name?: Maybe<Scalars['String']>;
  /** First 128 characters of query signature for display */
  signature?: Maybe<Scalars['String']>;
};

export type ApiKey = {
  id: Scalars['ID'];
  keyName?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type ApiKeyProvision = {
  __typename?: 'ApiKeyProvision';
  apiKey: ApiKey;
  created: Scalars['Boolean'];
};

export type AuditLogExport = {
  __typename?: 'AuditLogExport';
  actors?: Maybe<Array<Identity>>;
  bigqueryTriggeredAt?: Maybe<Scalars['Timestamp']>;
  completedAt?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  exportedFiles?: Maybe<Array<Scalars['String']>>;
  from: Scalars['Timestamp'];
  graphs?: Maybe<Array<Service>>;
  id: Scalars['ID'];
  requester?: Maybe<User>;
  status: AuditStatus;
  to: Scalars['Timestamp'];
};

export type AuditLogExportMutation = {
  __typename?: 'AuditLogExportMutation';
  cancel?: Maybe<Account>;
  delete?: Maybe<Account>;
};

export enum AuditStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED',
  Failed = 'FAILED',
  InProgress = 'IN_PROGRESS',
  Queued = 'QUEUED',
}

export type AvatarDeleteError = {
  __typename?: 'AvatarDeleteError';
  clientMessage: Scalars['String'];
  code: AvatarDeleteErrorCode;
  serverMessage: Scalars['String'];
};

export enum AvatarDeleteErrorCode {
  SsoUsersCannotDeleteSelfAvatar = 'SSO_USERS_CANNOT_DELETE_SELF_AVATAR',
}

export type AvatarUploadError = {
  __typename?: 'AvatarUploadError';
  clientMessage: Scalars['String'];
  code: AvatarUploadErrorCode;
  serverMessage: Scalars['String'];
};

export enum AvatarUploadErrorCode {
  SsoUsersCannotUploadSelfAvatar = 'SSO_USERS_CANNOT_UPLOAD_SELF_AVATAR',
}

export type AvatarUploadResult = AvatarUploadError | MediaUploadInfo;

export type BillingAddress = {
  __typename?: 'BillingAddress';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  zip?: Maybe<Scalars['String']>;
};

/** Billing address inpnut */
export type BillingAddressInput = {
  address1: Scalars['String'];
  address2?: InputMaybe<Scalars['String']>;
  city: Scalars['String'];
  country: Scalars['String'];
  state: Scalars['String'];
  zip: Scalars['String'];
};

export type BillingInfo = {
  __typename?: 'BillingInfo';
  address: BillingAddress;
  cardType?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastFour?: Maybe<Scalars['Int']>;
  lastName?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['Int']>;
  vatNumber?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export enum BillingModel {
  RequestBased = 'REQUEST_BASED',
  SeatBased = 'SEAT_BASED',
}

export type BillingMonth = {
  __typename?: 'BillingMonth';
  end: Scalars['Timestamp'];
  requests: Scalars['Long'];
  start: Scalars['Timestamp'];
};

export type BillingMutation = {
  __typename?: 'BillingMutation';
  createSetupIntent?: Maybe<SetupIntentResult>;
  startUsageBasedPlan?: Maybe<StartUsageBasedPlanResult>;
  syncAccountWithProviders?: Maybe<SyncBillingAccountResult>;
};

export type BillingMutationCreateSetupIntentArgs = {
  internalAccountId: Scalars['ID'];
};

export type BillingMutationStartUsageBasedPlanArgs = {
  internalAccountId: Scalars['ID'];
  paymentMethodId: Scalars['String'];
};

export type BillingMutationSyncAccountWithProvidersArgs = {
  internalAccountId: Scalars['ID'];
};

export enum BillingPeriod {
  Monthly = 'MONTHLY',
  Quarterly = 'QUARTERLY',
  SemiAnnually = 'SEMI_ANNUALLY',
  Yearly = 'YEARLY',
}

export type BillingPlan = {
  __typename?: 'BillingPlan';
  addons: Array<BillingPlanAddon>;
  billingModel: BillingModel;
  billingPeriod?: Maybe<BillingPeriod>;
  capabilities: BillingPlanCapabilities;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isTrial: Scalars['Boolean'];
  kind: BillingPlanKind;
  name: Scalars['String'];
  /** The price of every seat */
  pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
  /** The price of subscribing to this plan with a quantity of 1 (currently always the case) */
  pricePerUnitInUsdCents: Scalars['Int'];
  /** Whether the plan is accessible by all users in QueryRoot.allPlans, QueryRoot.plan, or AccountMutation.setPlan */
  public: Scalars['Boolean'];
  tier: BillingPlanTier;
};

export type BillingPlanAddon = {
  __typename?: 'BillingPlanAddon';
  id: Scalars['ID'];
  pricePerUnitInUsdCents: Scalars['Int'];
};

export type BillingPlanAddonV2 = {
  __typename?: 'BillingPlanAddonV2';
  id: Scalars['ID'];
  pricePerUnitInUsdCents: Scalars['Int'];
};

export type BillingPlanCapabilities = {
  __typename?: 'BillingPlanCapabilities';
  clientVersions: Scalars['Boolean'];
  clients: Scalars['Boolean'];
  contracts: Scalars['Boolean'];
  datadog: Scalars['Boolean'];
  errors: Scalars['Boolean'];
  federation: Scalars['Boolean'];
  launches: Scalars['Boolean'];
  maxAuditInDays: Scalars['Int'];
  maxRangeInDays?: Maybe<Scalars['Int']>;
  maxRangeInDaysForChecks?: Maybe<Scalars['Int']>;
  maxRequestsPerMonth?: Maybe<Scalars['Long']>;
  metrics: Scalars['Boolean'];
  notifications: Scalars['Boolean'];
  operationRegistry: Scalars['Boolean'];
  ranges: Array<Scalars['String']>;
  schemaValidation: Scalars['Boolean'];
  traces: Scalars['Boolean'];
  userRoles: Scalars['Boolean'];
  webhooks: Scalars['Boolean'];
};

export enum BillingPlanKind {
  Community = 'COMMUNITY',
  EnterpriseInternal = 'ENTERPRISE_INTERNAL',
  EnterprisePaid = 'ENTERPRISE_PAID',
  EnterprisePilot = 'ENTERPRISE_PILOT',
  TeamPaid = 'TEAM_PAID',
  TeamTrial = 'TEAM_TRIAL',
}

export enum BillingPlanKindV2 {
  Community = 'COMMUNITY',
  EnterpriseInternal = 'ENTERPRISE_INTERNAL',
  EnterprisePaid = 'ENTERPRISE_PAID',
  EnterprisePilot = 'ENTERPRISE_PILOT',
  TeamPaid = 'TEAM_PAID',
  TeamTrial = 'TEAM_TRIAL',
  Unknown = 'UNKNOWN',
}

export enum BillingPlanTier {
  Community = 'COMMUNITY',
  Enterprise = 'ENTERPRISE',
  Team = 'TEAM',
}

export enum BillingPlanTierV2 {
  Community = 'COMMUNITY',
  Enterprise = 'ENTERPRISE',
  Team = 'TEAM',
  Unknown = 'UNKNOWN',
}

export type BillingPlanV2 = {
  __typename?: 'BillingPlanV2';
  addons: Array<BillingPlanAddonV2>;
  billingModel: BillingModel;
  billingPeriod?: Maybe<BillingPeriod>;
  clientVersions: Scalars['Boolean'];
  clients: Scalars['Boolean'];
  contracts: Scalars['Boolean'];
  datadog: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  errors: Scalars['Boolean'];
  federation: Scalars['Boolean'];
  id: Scalars['ID'];
  isTrial: Scalars['Boolean'];
  kind: BillingPlanKindV2;
  launches: Scalars['Boolean'];
  maxAuditInDays: Scalars['Int'];
  maxRangeInDays?: Maybe<Scalars['Int']>;
  /** The maximum number of days that checks stats will be stored. */
  maxRangeInDaysForChecks?: Maybe<Scalars['Int']>;
  maxRequestsPerMonth?: Maybe<Scalars['Long']>;
  metrics: Scalars['Boolean'];
  name: Scalars['String'];
  notifications: Scalars['Boolean'];
  operationRegistry: Scalars['Boolean'];
  /** The price of every seat */
  pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
  /** The price of subscribing to this plan with a quantity of 1 (currently always the case) */
  pricePerUnitInUsdCents: Scalars['Int'];
  /** Whether the plan is accessible by all users in QueryRoot.allPlans, QueryRoot.plan, or AccountMutation.setPlan */
  public: Scalars['Boolean'];
  ranges: Array<Scalars['String']>;
  schemaValidation: Scalars['Boolean'];
  tier: BillingPlanTierV2;
  traces: Scalars['Boolean'];
  userRoles: Scalars['Boolean'];
  webhooks: Scalars['Boolean'];
};

export type BillingSubscription = {
  __typename?: 'BillingSubscription';
  activatedAt: Scalars['Timestamp'];
  addons: Array<BillingSubscriptionAddon>;
  autoRenew: Scalars['Boolean'];
  /** The price of the subscription when ignoring add-ons (such as seats), ie quantity * pricePerUnitInUsdCents */
  basePriceInUsdCents: Scalars['Long'];
  canceledAt?: Maybe<Scalars['Timestamp']>;
  currentPeriodEndsAt: Scalars['Timestamp'];
  currentPeriodStartedAt: Scalars['Timestamp'];
  expiresAt?: Maybe<Scalars['Timestamp']>;
  plan: BillingPlan;
  /** The price of every seat */
  pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
  /** The price of every unit in the subscription (hence multiplied by quantity to get to the basePriceInUsdCents) */
  pricePerUnitInUsdCents: Scalars['Int'];
  quantity: Scalars['Int'];
  /** Total price of the subscription when it next renews, including add-ons (such as seats) */
  renewalTotalPriceInUsdCents: Scalars['Long'];
  state: SubscriptionState;
  /** Total price of the subscription, including add-ons (such as seats) */
  totalPriceInUsdCents: Scalars['Long'];
  /**
   * When this subscription's trial period expires (if it is a trial). Not the same as the
   * subscription's Recurly expiration).
   */
  trialExpiresAt?: Maybe<Scalars['Timestamp']>;
  uuid: Scalars['ID'];
};

export type BillingSubscriptionAddon = {
  __typename?: 'BillingSubscriptionAddon';
  id: Scalars['ID'];
  pricePerUnitInUsdCents: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type BillingSubscriptionAddonV2 = {
  __typename?: 'BillingSubscriptionAddonV2';
  id: Scalars['ID'];
  pricePerUnitInUsdCents: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type BillingSubscriptionV2 = {
  __typename?: 'BillingSubscriptionV2';
  /** The price of every unit in the subscription (hence multiplied by quantity to get to the basePriceInUsdCents) */
  activatedAt: Scalars['Timestamp'];
  addons: Array<BillingSubscriptionAddonV2>;
  autoRenew: Scalars['Boolean'];
  canceledAt?: Maybe<Scalars['Timestamp']>;
  currentPeriodEndsAt: Scalars['Timestamp'];
  currentPeriodStartedAt: Scalars['Timestamp'];
  expiresAt?: Maybe<Scalars['Timestamp']>;
  plan: BillingPlanV2;
  /** The price of every seat */
  pricePerSeatInUsdCents?: Maybe<Scalars['Int']>;
  quantity: Scalars['Int'];
  state: SubscriptionStateV2;
  /**
   * When this subscription's trial period expires (if it is a trial). Not the same as the
   * subscription's Recurly expiration).
   */
  trialExpiresAt?: Maybe<Scalars['Timestamp']>;
  uuid: Scalars['ID'];
};

/** Columns of BillingUsageStats. */
export enum BillingUsageStatsColumn {
  AccountId = 'ACCOUNT_ID',
  AgentVersion = 'AGENT_VERSION',
  OperationCount = 'OPERATION_COUNT',
  OperationCountProvidedExplicitly = 'OPERATION_COUNT_PROVIDED_EXPLICITLY',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type BillingUsageStatsDimensions = {
  __typename?: 'BillingUsageStatsDimensions';
  accountId?: Maybe<Scalars['ID']>;
  agentVersion?: Maybe<Scalars['String']>;
  operationCountProvidedExplicitly?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in BillingUsageStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type BillingUsageStatsFilter = {
  /** Selects rows whose accountId dimension equals the given value if not null. To query for the null value, use {in: {accountId: [null]}} instead. */
  accountId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose agentVersion dimension equals the given value if not null. To query for the null value, use {in: {agentVersion: [null]}} instead. */
  agentVersion?: InputMaybe<Scalars['String']>;
  and?: InputMaybe<Array<BillingUsageStatsFilter>>;
  in?: InputMaybe<BillingUsageStatsFilterIn>;
  not?: InputMaybe<BillingUsageStatsFilter>;
  /** Selects rows whose operationCountProvidedExplicitly dimension equals the given value if not null. To query for the null value, use {in: {operationCountProvidedExplicitly: [null]}} instead. */
  operationCountProvidedExplicitly?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<BillingUsageStatsFilter>>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in BillingUsageStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type BillingUsageStatsFilterIn = {
  /** Selects rows whose accountId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  accountId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose agentVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  agentVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose operationCountProvidedExplicitly dimension is in the given list. A null value in the list means a row with null for that dimension. */
  operationCountProvidedExplicitly?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type BillingUsageStatsMetrics = {
  __typename?: 'BillingUsageStatsMetrics';
  operationCount: Scalars['Long'];
};

export type BillingUsageStatsOrderBySpec = {
  column: BillingUsageStatsColumn;
  direction: Ordering;
};

export type BillingUsageStatsRecord = {
  __typename?: 'BillingUsageStatsRecord';
  /** Dimensions of BillingUsageStats that can be grouped by. */
  groupBy: BillingUsageStatsDimensions;
  /** Metrics of BillingUsageStats that can be aggregated over. */
  metrics: BillingUsageStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** The building of a Studio variant (including supergraph composition and any contract filtering) as part of a launch. */
export type Build = {
  __typename?: 'Build';
  /** The inputs provided to the build, including subgraph and contract details. */
  input: BuildInput;
  /** The result of the build. This value is null until the build completes. */
  result?: Maybe<BuildResult>;
};

export type BuildConfig = {
  __typename?: 'BuildConfig';
  buildPipelineTrack: BuildPipelineTrack;
  tagInApiSchema: Scalars['Boolean'];
};

/** A single error that occurred during the failed execution of a build. */
export type BuildError = {
  __typename?: 'BuildError';
  code?: Maybe<Scalars['String']>;
  locations: Array<SourceLocation>;
  message: Scalars['String'];
};

/** Contains the details of an executed build that failed. */
export type BuildFailure = {
  __typename?: 'BuildFailure';
  /** A list of all errors that occurred during the failed build. */
  errorMessages: Array<BuildError>;
};

export type BuildInput = CompositionBuildInput | FilterBuildInput;

export enum BuildPipelineTrack {
  Fed_1_0 = 'FED_1_0',
  Fed_1_1 = 'FED_1_1',
  Fed_2_0 = 'FED_2_0',
}

export type BuildResult = BuildFailure | BuildSuccess;

/** Contains the details of an executed build that succeeded. */
export type BuildSuccess = {
  __typename?: 'BuildSuccess';
  /** Contains the supergraph and API schemas created by composition. */
  coreSchema: CoreSchema;
};

export enum CacheScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Unknown = 'UNKNOWN',
  Unrecognized = 'UNRECOGNIZED',
}

/** A single change that was made to a definition in a schema. */
export type Change = {
  __typename?: 'Change';
  affectedQueries?: Maybe<Array<AffectedQuery>>;
  /** Target arg of change made. */
  argNode?: Maybe<NamedIntrospectionArg>;
  /** Indication of the category of the change (e.g. addition, removal, edit). */
  category: ChangeCategory;
  /**
   * Node related to the top level node that was changed, such as a field in an object,
   * a value in an enum or the object of an interface.
   */
  childNode?: Maybe<NamedIntrospectionValue>;
  /** Indicates the type of change that was made, and to what (e.g., 'TYPE_REMOVED'). */
  code: Scalars['String'];
  /** A human-readable description of the change. */
  description: Scalars['String'];
  /** Top level node affected by the change. */
  parentNode?: Maybe<NamedIntrospectionType>;
  /** The severity of the change (e.g., `FAILURE` or `NOTICE`) */
  severity: ChangeSeverity;
  /**
   * Indication of the success of the overall change, either failure, warning, or notice.
   * @deprecated use severity instead
   */
  type: ChangeType;
};

/**
 * Defines a set of categories that a schema change
 * can be grouped by.
 */
export enum ChangeCategory {
  Addition = 'ADDITION',
  Deprecation = 'DEPRECATION',
  Edit = 'EDIT',
  Removal = 'REMOVAL',
}

/**
 * These schema change codes represent all of the possible changes that can
 * occur during the schema diff algorithm.
 */
export enum ChangeCode {
  /** Type of the argument was changed. */
  ArgChangedType = 'ARG_CHANGED_TYPE',
  /** Argument was changed from nullable to non-nullable. */
  ArgChangedTypeOptionalToRequired = 'ARG_CHANGED_TYPE_OPTIONAL_TO_REQUIRED',
  /** Default value added or changed for the argument. */
  ArgDefaultValueChange = 'ARG_DEFAULT_VALUE_CHANGE',
  /** Description was added, removed, or updated for argument. */
  ArgDescriptionChange = 'ARG_DESCRIPTION_CHANGE',
  /** Argument to a field was removed. */
  ArgRemoved = 'ARG_REMOVED',
  /** Argument to the directive was removed. */
  DirectiveArgRemoved = 'DIRECTIVE_ARG_REMOVED',
  /** Location of the directive was removed. */
  DirectiveLocationRemoved = 'DIRECTIVE_LOCATION_REMOVED',
  /** Directive was removed. */
  DirectiveRemoved = 'DIRECTIVE_REMOVED',
  /** Repeatable flag was removed for directive. */
  DirectiveRepeatableRemoved = 'DIRECTIVE_REPEATABLE_REMOVED',
  /** Enum was deprecated. */
  EnumDeprecated = 'ENUM_DEPRECATED',
  /** Reason for enum deprecation changed. */
  EnumDeprecatedReasonChange = 'ENUM_DEPRECATED_REASON_CHANGE',
  /** Enum deprecation was removed. */
  EnumDeprecationRemoved = 'ENUM_DEPRECATION_REMOVED',
  /** Description was added, removed, or updated for enum value. */
  EnumValueDescriptionChange = 'ENUM_VALUE_DESCRIPTION_CHANGE',
  /** Field was added to the type. */
  FieldAdded = 'FIELD_ADDED',
  /** Return type for the field was changed. */
  FieldChangedType = 'FIELD_CHANGED_TYPE',
  /** Field was deprecated. */
  FieldDeprecated = 'FIELD_DEPRECATED',
  /** Reason for field deprecation changed. */
  FieldDeprecatedReasonChange = 'FIELD_DEPRECATED_REASON_CHANGE',
  /** Field deprecation removed. */
  FieldDeprecationRemoved = 'FIELD_DEPRECATION_REMOVED',
  /** Description was added, removed, or updated for field. */
  FieldDescriptionChange = 'FIELD_DESCRIPTION_CHANGE',
  /** Type of the field in the input object was changed. */
  FieldOnInputObjectChangedType = 'FIELD_ON_INPUT_OBJECT_CHANGED_TYPE',
  /** Field was removed from the type. */
  FieldRemoved = 'FIELD_REMOVED',
  /** Field was removed from the input object. */
  FieldRemovedFromInputObject = 'FIELD_REMOVED_FROM_INPUT_OBJECT',
  /** Non-nullable field was added to the input object. (Deprecated.) */
  NonNullableFieldAddedToInputObject = 'NON_NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT',
  /** Nullable field was added to the input type. (Deprecated.) */
  NullableFieldAddedToInputObject = 'NULLABLE_FIELD_ADDED_TO_INPUT_OBJECT',
  /** Nullable argument was added to the field. */
  OptionalArgAdded = 'OPTIONAL_ARG_ADDED',
  /** Optional field was added to the input type. */
  OptionalFieldAddedToInputObject = 'OPTIONAL_FIELD_ADDED_TO_INPUT_OBJECT',
  /** Non-nullable argument was added to the field. */
  RequiredArgAdded = 'REQUIRED_ARG_ADDED',
  /** Non-nullable argument added to directive. */
  RequiredDirectiveArgAdded = 'REQUIRED_DIRECTIVE_ARG_ADDED',
  /** Required field was added to the input object. */
  RequiredFieldAddedToInputObject = 'REQUIRED_FIELD_ADDED_TO_INPUT_OBJECT',
  /** Type was added to the schema. */
  TypeAdded = 'TYPE_ADDED',
  /** Type now implements the interface. */
  TypeAddedToInterface = 'TYPE_ADDED_TO_INTERFACE',
  /** A new value was added to the enum. */
  TypeAddedToUnion = 'TYPE_ADDED_TO_UNION',
  /**
   * Type was changed from one kind to another.
   * Ex: scalar to object or enum to union.
   */
  TypeChangedKind = 'TYPE_CHANGED_KIND',
  /** Description was added, removed, or updated for type. */
  TypeDescriptionChange = 'TYPE_DESCRIPTION_CHANGE',
  /** Type (object or scalar) was removed from the schema. */
  TypeRemoved = 'TYPE_REMOVED',
  /** Type no longer implements the interface. */
  TypeRemovedFromInterface = 'TYPE_REMOVED_FROM_INTERFACE',
  /** Type is no longer included in the union. */
  TypeRemovedFromUnion = 'TYPE_REMOVED_FROM_UNION',
  /** A new value was added to the enum. */
  ValueAddedToEnum = 'VALUE_ADDED_TO_ENUM',
  /** Value was removed from the enum. */
  ValueRemovedFromEnum = 'VALUE_REMOVED_FROM_ENUM',
}

/**
 * Represents the tuple of static information
 * about a particular kind of schema change.
 */
export type ChangeDefinition = {
  __typename?: 'ChangeDefinition';
  category: ChangeCategory;
  code: ChangeCode;
  defaultSeverity: ChangeSeverity;
};

/** Info about a change in the context of an operation it affects */
export type ChangeOnOperation = {
  __typename?: 'ChangeOnOperation';
  /** Human-readable explanation of the impact of this change on the operation */
  impact?: Maybe<Scalars['String']>;
  /** The semantic info about this change, i.e. info about the change that doesn't depend on the operation */
  semanticChange: SemanticChange;
};

export enum ChangeSeverity {
  Failure = 'FAILURE',
  Notice = 'NOTICE',
}

/**
 * Summary of the changes for a schema diff, computed by placing the changes into categories and then
 * counting the size of each category. This categorization can be done in different ways, and
 * accordingly there are multiple fields here for each type of categorization.
 *
 * Note that if an object or interface field is added/removed, there won't be any addition/removal
 * changes generated for its arguments or @deprecated usages. If an enum type is added/removed, there
 * will be addition/removal changes generated for its values, but not for those values' @deprecated
 * usages. Description changes won't be generated for a schema element if that element (or an
 * ancestor) was added/removed.
 */
export type ChangeSummary = {
  __typename?: 'ChangeSummary';
  /** Counts for changes to fields of objects, input objects, and interfaces. */
  field: FieldChangeSummaryCounts;
  /** Counts for all changes. */
  total: TotalChangeSummaryCounts;
  /**
   * Counts for changes to non-field aspects of objects, input objects, and interfaces,
   * and all aspects of enums, unions, and scalars.
   */
  type: TypeChangeSummaryCounts;
};

export enum ChangeType {
  Failure = 'FAILURE',
  Notice = 'NOTICE',
}

export type ChangelogLaunchResult = {
  __typename?: 'ChangelogLaunchResult';
  createdAt: Scalars['Timestamp'];
  schemaTagID: Scalars['ID'];
};

/** Destination for notifications */
export type Channel = {
  id: Scalars['ID'];
  name: Scalars['String'];
  subscriptions: Array<ChannelSubscription>;
};

export type ChannelSubscription = {
  channels: Array<Channel>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  variant?: Maybe<Scalars['String']>;
};

export type CheckConfiguration = {
  __typename?: 'CheckConfiguration';
  /** Time when check configuration was created */
  createdAt: Scalars['Timestamp'];
  /** Clients to ignore during validation */
  excludedClients: Array<ClientFilter>;
  /** Operation names to ignore during validation */
  excludedOperationNames?: Maybe<Array<Maybe<OperationNameFilter>>>;
  /** Operations to ignore during validation */
  excludedOperations: Array<ExcludedOperation>;
  /** Graph that this check configuration belongs to */
  graphID: Scalars['ID'];
  /** ID of the check configuration */
  id: Scalars['ID'];
  /** Default configuration to include operations on the base variant. */
  includeBaseVariant: Scalars['Boolean'];
  /** Variant overrides for validation */
  includedVariants: Array<Scalars['String']>;
  /** Minimum number of requests within the window for an operation to be considered. */
  operationCountThreshold: Scalars['Int'];
  /**
   * Number of requests within the window for an operation to be considered, relative to
   * total request count. Expected values are between 0 and 0.05 (minimum 5% of
   * total request volume)
   */
  operationCountThresholdPercentage: Scalars['Float'];
  /**
   * Only check operations from the last <timeRangeSeconds> seconds.
   * The default is 7 days (604,800 seconds).
   */
  timeRangeSeconds: Scalars['Long'];
  /** Time when check configuration was last updated */
  updatedAt: Scalars['Timestamp'];
  /** Identity of the last user to update the check configuration */
  updatedBy?: Maybe<Identity>;
};

/** Filter options available when listing checks. */
export type CheckFilterInput = {
  authors?: InputMaybe<Array<Scalars['String']>>;
  branches?: InputMaybe<Array<Scalars['String']>>;
  status?: InputMaybe<CheckFilterInputStatusOption>;
  subgraphs?: InputMaybe<Array<Scalars['String']>>;
  variants?: InputMaybe<Array<Scalars['String']>>;
};

/** Options for filtering CheckWorkflows by status */
export enum CheckFilterInputStatusOption {
  Failed = 'FAILED',
  Passed = 'PASSED',
  Pending = 'PENDING',
}

/** The result of performing a subgraph check, including all steps. */
export type CheckPartialSchemaResult = {
  __typename?: 'CheckPartialSchemaResult';
  /** Overall result of the check. This will be null if composition validation was unsuccessful. */
  checkSchemaResult?: Maybe<CheckSchemaResult>;
  /** Result of compostion run as part of the overall subgraph check. */
  compositionValidationResult: CompositionValidationResult;
  /** Whether any modifications were detected in the composed core schema. */
  coreSchemaModified: Scalars['Boolean'];
  /** Check workflow associated with the overall subgraph check. */
  workflow?: Maybe<CheckWorkflow>;
};

export type CheckRequestResult =
  | CheckRequestSuccess
  | InvalidInputError
  | PermissionError
  | PlanError;

export type CheckRequestSuccess = {
  __typename?: 'CheckRequestSuccess';
  targetURL: Scalars['String'];
  workflowID: Scalars['ID'];
};

export type CheckSchemaAsyncInput = {
  config: HistoricQueryParametersInput;
  gitContext: GitContextInput;
  graphRef: Scalars['ID'];
  /** Endpoint must be specified if isSandbox is true */
  introspectionEndpoint?: InputMaybe<Scalars['String']>;
  isSandbox: Scalars['Boolean'];
  proposedSchemaDocument?: InputMaybe<Scalars['String']>;
};

/** The result of running schema checks on a graph variant. */
export type CheckSchemaResult = {
  __typename?: 'CheckSchemaResult';
  /** The schema diff and affected operations generated by the schema check. */
  diffToPrevious: SchemaDiff;
  /** The unique ID of this execution of checks. */
  operationsCheckID: Scalars['ID'];
  /** The URL to view the schema diff in Studio. */
  targetUrl?: Maybe<Scalars['String']>;
  /** Workflow associated with this check result */
  workflow?: Maybe<CheckWorkflow>;
};

export type CheckWorkflow = {
  __typename?: 'CheckWorkflow';
  /**
   * The variant provided as a base to check against.  Only the differences from the
   * base schema will be tested in operations checks.
   */
  baseVariant?: Maybe<GraphVariant>;
  completedAt?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  /** The downstream task associated with this workflow, or null if no such task kind was scheduled. */
  downstreamTask?: Maybe<DownstreamCheckTask>;
  /** Contextual parameters supplied by the runtime environment where the check was run. */
  gitContext?: Maybe<GitContext>;
  id: Scalars['ID'];
  /** The name of the implementing service that was responsible for triggering the validation. */
  implementingServiceName?: Maybe<Scalars['String']>;
  /** If this check is triggered for an sdl fetched using introspection, this is the endpoint where that schema was being served. */
  introspectionEndpoint?: Maybe<Scalars['String']>;
  /** Only true if the check was triggered from Sandbox Checks page. */
  isSandboxCheck: Scalars['Boolean'];
  /** If this check was created by rerunning, the original check that was rerun. */
  rerunOf?: Maybe<CheckWorkflow>;
  /** Checks created by re-running this check, most recent first. */
  reruns?: Maybe<Array<CheckWorkflow>>;
  startedAt?: Maybe<Scalars['Timestamp']>;
  /** Overall status of the workflow, based on the underlying task statuses. */
  status: CheckWorkflowStatus;
  /** The set of check tasks associated with this workflow, e.g. OperationsCheck, GraphComposition, etc. */
  tasks: Array<CheckWorkflowTask>;
  /** Identity of the user who ran this check */
  triggeredBy?: Maybe<Identity>;
  /** Configuration of validation at the time the check was run. */
  validationConfig?: Maybe<SchemaDiffValidationConfig>;
};

export type CheckWorkflowRerunsArgs = {
  limit?: Scalars['Int'];
};

export type CheckWorkflowMutation = {
  __typename?: 'CheckWorkflowMutation';
  /** Re-run a check workflow using the current configuration. A new workflow is created and returned. */
  rerun?: Maybe<CheckWorkflowRerunResult>;
};

export type CheckWorkflowRerunResult = {
  __typename?: 'CheckWorkflowRerunResult';
  /** Check workflow created by re-running. */
  result?: Maybe<CheckWorkflow>;
  /** Check workflow that was rerun. */
  source?: Maybe<CheckWorkflow>;
};

export enum CheckWorkflowStatus {
  Failed = 'FAILED',
  Passed = 'PASSED',
  Pending = 'PENDING',
}

export type CheckWorkflowTask = {
  completedAt?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  status: CheckWorkflowTaskStatus;
  /** A studio UI url to view the details of this check workflow task */
  targetURL?: Maybe<Scalars['String']>;
  /** The workflow that this task belongs to. */
  workflow: CheckWorkflow;
};

export enum CheckWorkflowTaskStatus {
  Blocked = 'BLOCKED',
  Failed = 'FAILED',
  Passed = 'PASSED',
  Pending = 'PENDING',
}

/** Client filter configuration for a graph. */
export type ClientFilter = {
  __typename?: 'ClientFilter';
  /** name of the client set by the user and reported alongside metrics */
  name: Scalars['String'];
  /** version of the client set by the user and reported alongside metrics */
  version?: Maybe<Scalars['String']>;
};

/**
 * Options to filter by client reference ID, client name, and client version.
 * If passing client version, make sure to either provide a client reference ID or client name.
 */
export type ClientFilterInput = {
  /** name of the client set by the user and reported alongside metrics */
  name: Scalars['String'];
  /** version of the client set by the user and reported alongside metrics */
  version?: InputMaybe<Scalars['String']>;
};

/** Filter options to exclude by client reference ID, client name, and client version. */
export type ClientInfoFilter = {
  name: Scalars['String'];
  /** Ignored */
  referenceID?: InputMaybe<Scalars['ID']>;
  version?: InputMaybe<Scalars['String']>;
};

/** Filter options to exclude clients. Used as an output type for SchemaDiffValidationConfig. */
export type ClientInfoFilterOutput = {
  __typename?: 'ClientInfoFilterOutput';
  name: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};

export enum ComparisonOperator {
  Equals = 'EQUALS',
  GreaterThan = 'GREATER_THAN',
  GreaterThanOrEqualTo = 'GREATER_THAN_OR_EQUAL_TO',
  LessThan = 'LESS_THAN',
  LessThanOrEqualTo = 'LESS_THAN_OR_EQUAL_TO',
  NotEquals = 'NOT_EQUALS',
  Unrecognized = 'UNRECOGNIZED',
}

/** The result of supergraph composition that Studio performed in response to an attempted deletion of a subgraph. */
export type CompositionAndRemoveResult = {
  __typename?: 'CompositionAndRemoveResult';
  /** The produced composition config. Will be null if there are any errors */
  compositionConfig?: Maybe<CompositionConfig>;
  /** Whether the removed implementing service existed. */
  didExist: Scalars['Boolean'];
  /** A list of errors that occurred during composition. Errors mean that Apollo was unable to compose the graph variant's subgraphs into a supergraph schema. If any errors are present, gateways / routers are not updated. */
  errors: Array<Maybe<SchemaCompositionError>>;
  /** ID that points to the results of composition. */
  graphCompositionID: Scalars['String'];
  /** List of subgraphs that are included in this composition. */
  subgraphConfigs: Array<SubgraphConfig>;
  /** Whether this composition result resulted in a new supergraph schema passed to Uplink (`true`), or the build failed for any reason (`false`). For dry runs, this value is `true` if Uplink _would have_ been updated with the result. */
  updatedGateway: Scalars['Boolean'];
};

/** The result of supergraph composition that Studio performed in response to an attempted publish of a subgraph. */
export type CompositionAndUpsertResult = {
  __typename?: 'CompositionAndUpsertResult';
  /** The generated composition config, or null if any errors occurred. */
  compositionConfig?: Maybe<CompositionConfig>;
  /** A list of errors that occurred during composition. Errors mean that Apollo was unable to compose the graph variant's subgraphs into a supergraph schema. If any errors are present, gateways / routers are not updated. */
  errors: Array<Maybe<SchemaCompositionError>>;
  /** ID that points to the results of composition. */
  graphCompositionID: Scalars['String'];
  /** Human-readable text describing the launch result of the subgraph publish. */
  launchCliCopy?: Maybe<Scalars['String']>;
  /** The URL of the Studio page for this update's associated launch, if available. */
  launchUrl?: Maybe<Scalars['String']>;
  /** List of subgraphs that are included in this composition. */
  subgraphConfigs: Array<SubgraphConfig>;
  /** Whether this composition result resulted in a new supergraph schema passed to Uplink (`true`), or the build failed for any reason (`false`). For dry runs, this value is `true` if Uplink _would have_ been updated with the result. */
  updatedGateway: Scalars['Boolean'];
  /** Whether a new subgraph was created as part of this publish. */
  wasCreated: Scalars['Boolean'];
  /** Whether an implementingService was updated as part of this mutation */
  wasUpdated: Scalars['Boolean'];
};

export type CompositionBuildInput = {
  __typename?: 'CompositionBuildInput';
  subgraphs: Array<Subgraph>;
  version?: Maybe<Scalars['String']>;
};

export type CompositionCheckTask = CheckWorkflowTask & {
  __typename?: 'CompositionCheckTask';
  completedAt?: Maybe<Scalars['Timestamp']>;
  coreSchemaModified: Scalars['Boolean'];
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  /** The result of the composition. */
  result?: Maybe<CompositionResult>;
  status: CheckWorkflowTaskStatus;
  targetURL?: Maybe<Scalars['String']>;
  workflow: CheckWorkflow;
};

/** Composition configuration exposed to the gateway. */
export type CompositionConfig = {
  __typename?: 'CompositionConfig';
  /**
   * List of GCS links for implementing services that comprise a composed graph. Is empty if tag/inaccessible is enabled.
   * @deprecated Soon we will stop writing to GCS locations
   */
  implementingServiceLocations: Array<ImplementingServiceLocation>;
  /** The resulting API schema's SHA256 hash, represented as a hexadecimal string. */
  schemaHash: Scalars['String'];
};

/** The result of supergraph composition that Studio performed. */
export type CompositionPublishResult = CompositionResult & {
  __typename?: 'CompositionPublishResult';
  /** The generated composition config, or null if any errors occurred. */
  compositionConfig?: Maybe<CompositionConfig>;
  /**
   * Supergraph SDL generated by composition (this is not the CSDL, that is a deprecated format).
   * @deprecated Use supergraphSdl instead
   */
  csdl?: Maybe<Scalars['GraphQLDocument']>;
  /** A list of errors that occurred during composition. Errors mean that Apollo was unable to compose the graph variant's subgraphs into a supergraph schema. If any errors are present, gateways / routers are not updated. */
  errors: Array<SchemaCompositionError>;
  /** The unique ID for this instance of composition. */
  graphCompositionID: Scalars['ID'];
  /** List of subgraphs that are included in this composition. */
  subgraphConfigs: Array<SubgraphConfig>;
  /** The supergraph SDL generated by composition. */
  supergraphSdl?: Maybe<Scalars['GraphQLDocument']>;
  /** Whether this composition result updated gateway/router instances via Uplink (`true`), or it was a dry run (`false`). */
  updatedGateway: Scalars['Boolean'];
  webhookNotificationBody?: Maybe<Scalars['String']>;
};

/** The result of supergraph composition performed by Apollo Studio, often as the result of a subgraph check or subgraph publish. See individual implementations for more details. */
export type CompositionResult = {
  /**
   * Supergraph SDL generated by composition (this is not the cSDL, a deprecated format).
   * @deprecated Use supergraphSdl instead
   */
  csdl?: Maybe<Scalars['GraphQLDocument']>;
  /** A list of errors that occurred during composition. Errors mean that Apollo was unable to compose the graph variant's subgraphs into a supergraph schema. If any errors are present, gateways / routers are not updated. */
  errors: Array<SchemaCompositionError>;
  /** The unique ID for this instance of composition. */
  graphCompositionID: Scalars['ID'];
  /** List of subgraphs included in this composition. */
  subgraphConfigs: Array<SubgraphConfig>;
  /** Supergraph SDL generated by composition. */
  supergraphSdl?: Maybe<Scalars['GraphQLDocument']>;
};

export type CompositionStatusSubscription = ChannelSubscription & {
  __typename?: 'CompositionStatusSubscription';
  channels: Array<Channel>;
  createdAt: Scalars['Timestamp'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  lastUpdatedAt: Scalars['Timestamp'];
  variant?: Maybe<Scalars['String']>;
};

/** The composition config exposed to the gateway */
export type CompositionValidationDetails = {
  __typename?: 'CompositionValidationDetails';
  /** List of implementing service partial schemas that comprised the graph composed during validation */
  implementingServices: Array<FederatedImplementingServicePartialSchema>;
  /** Hash of the composed schema */
  schemaHash?: Maybe<Scalars['String']>;
};

/** The result of composition validation run by Apollo Studio during a subgraph check. */
export type CompositionValidationResult = CompositionResult & {
  __typename?: 'CompositionValidationResult';
  /** Describes whether composition succeeded. */
  compositionSuccess: Scalars['Boolean'];
  /**
   * Akin to a composition config, represents the subgraph schemas and corresponding subgraphs that were used
   * in running composition. Will be null if any errors are encountered. Also may contain a schema hash if
   * one could be computed, which can be used for schema validation.
   */
  compositionValidationDetails?: Maybe<CompositionValidationDetails>;
  /**
   * Supergraph SDL generated by composition (this is not the CSDL, that is a deprecated format).
   * @deprecated Use supergraphSdl instead
   */
  csdl?: Maybe<Scalars['GraphQLDocument']>;
  /** A list of errors that occurred during composition. Errors mean that Apollo was unable to compose the graph variant's subgraphs into a supergraph schema. If any errors are present, gateways / routers are not updated. */
  errors: Array<SchemaCompositionError>;
  /** The unique ID for this instance of composition. */
  graphCompositionID: Scalars['ID'];
  /** The implementing service that was responsible for triggering the validation */
  proposedImplementingService: FederatedImplementingServicePartialSchema;
  /** List of subgraphs that are included in this composition. */
  subgraphConfigs: Array<SubgraphConfig>;
  /** The supergraph schema document generated by composition. */
  supergraphSdl?: Maybe<Scalars['GraphQLDocument']>;
  /** If created as part of a check workflow, the associated workflow task. */
  workflowTask?: Maybe<CompositionCheckTask>;
};

export type ContractPreview = {
  __typename?: 'ContractPreview';
  result: ContractPreviewResult;
  upstreamLaunch: Launch;
};

export type ContractPreviewErrors = {
  __typename?: 'ContractPreviewErrors';
  errors: Array<Scalars['String']>;
  failedAt: ContractVariantFailedStep;
};

export type ContractPreviewResult =
  | ContractPreviewErrors
  | ContractPreviewSuccess;

export type ContractPreviewSuccess = {
  __typename?: 'ContractPreviewSuccess';
  apiDocument: Scalars['String'];
  coreDocument: Scalars['String'];
  fieldCount: Scalars['Int'];
  typeCount: Scalars['Int'];
};

export enum ContractVariantFailedStep {
  AddDirectiveDefinitionsIfNotPresent = 'ADD_DIRECTIVE_DEFINITIONS_IF_NOT_PRESENT',
  AddInaccessibleSpecPurpose = 'ADD_INACCESSIBLE_SPEC_PURPOSE',
  DirectiveDefinitionLocationAugmenting = 'DIRECTIVE_DEFINITION_LOCATION_AUGMENTING',
  EmptyEnumMasking = 'EMPTY_ENUM_MASKING',
  EmptyInputObjectMasking = 'EMPTY_INPUT_OBJECT_MASKING',
  EmptyObjectAndInterfaceFieldMasking = 'EMPTY_OBJECT_AND_INTERFACE_FIELD_MASKING',
  EmptyObjectAndInterfaceMasking = 'EMPTY_OBJECT_AND_INTERFACE_MASKING',
  EmptyUnionMasking = 'EMPTY_UNION_MASKING',
  InputValidation = 'INPUT_VALIDATION',
  Parsing = 'PARSING',
  ParsingTagDirectives = 'PARSING_TAG_DIRECTIVES',
  PartialInterfaceMasking = 'PARTIAL_INTERFACE_MASKING',
  SchemaRetrieval = 'SCHEMA_RETRIEVAL',
  TagInheriting = 'TAG_INHERITING',
  TagMatching = 'TAG_MATCHING',
  ToApiSchema = 'TO_API_SCHEMA',
  ToFilterSchema = 'TO_FILTER_SCHEMA',
  Unknown = 'UNKNOWN',
  VersionCheck = 'VERSION_CHECK',
}

export type ContractVariantPreviewErrors = {
  __typename?: 'ContractVariantPreviewErrors';
  errorMessages: Array<Scalars['String']>;
  failedStep: ContractVariantFailedStep;
};

export type ContractVariantPreviewResult =
  | ContractVariantPreviewErrors
  | ContractVariantPreviewSuccess;

export type ContractVariantPreviewSuccess = {
  __typename?: 'ContractVariantPreviewSuccess';
  baseApiSchema: Scalars['String'];
  baseCoreSchema: Scalars['String'];
  contractApiSchema: Scalars['String'];
  contractCoreSchema: Scalars['String'];
};

export type ContractVariantUpsertErrors = {
  __typename?: 'ContractVariantUpsertErrors';
  errorMessages: Array<Scalars['String']>;
};

export type ContractVariantUpsertResult =
  | ContractVariantUpsertErrors
  | ContractVariantUpsertSuccess;

export type ContractVariantUpsertSuccess = {
  __typename?: 'ContractVariantUpsertSuccess';
  contractVariant: GraphVariant;
};

export type CoreSchema = {
  __typename?: 'CoreSchema';
  apiDocument: Scalars['GraphQLDocument'];
  coreDocument: Scalars['GraphQLDocument'];
  coreHash: Scalars['String'];
  fieldCount: Scalars['Int'];
  tags: Array<Scalars['String']>;
  typeCount: Scalars['Int'];
};

export type CreateOperationCollectionResult =
  | OperationCollection
  | PermissionError
  | ValidationError;

export type CronExecution = {
  __typename?: 'CronExecution';
  completedAt?: Maybe<Scalars['Timestamp']>;
  failure?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  job: CronJob;
  resolvedAt?: Maybe<Scalars['Timestamp']>;
  resolvedBy?: Maybe<Actor>;
  schedule: Scalars['String'];
  startedAt: Scalars['Timestamp'];
};

export type CronJob = {
  __typename?: 'CronJob';
  group: Scalars['String'];
  name: Scalars['String'];
  recentExecutions: Array<CronExecution>;
};

export type CronJobRecentExecutionsArgs = {
  n?: InputMaybe<Scalars['Int']>;
};

export enum DatadogApiRegion {
  Eu = 'EU',
  Eu1 = 'EU1',
  Us = 'US',
  Us1 = 'US1',
  Us1Fed = 'US1FED',
  Us3 = 'US3',
  Us5 = 'US5',
}

export type DatadogMetricsConfig = {
  __typename?: 'DatadogMetricsConfig';
  apiKey: Scalars['String'];
  apiRegion: DatadogApiRegion;
  enabled: Scalars['Boolean'];
  legacyMetricNames: Scalars['Boolean'];
};

export type DeleteOperationCollectionResult =
  | DeleteOperationCollectionSuccess
  | PermissionError;

export type DeleteOperationCollectionSuccess = {
  __typename?: 'DeleteOperationCollectionSuccess';
  sandboxOwner?: Maybe<User>;
  variants: Array<GraphVariant>;
};

/** The result of attempting to delete a graph variant. */
export type DeleteSchemaTagResult = {
  __typename?: 'DeleteSchemaTagResult';
  /** Whether the variant was deleted or not. */
  deleted: Scalars['Boolean'];
};

export enum DeletionTargetType {
  Account = 'ACCOUNT',
  User = 'USER',
}

/** Support for a single directive on a graph variant */
export type DirectiveSupportStatus = {
  __typename?: 'DirectiveSupportStatus';
  /** whether the directive is supported on the current graph variant */
  enabled: Scalars['Boolean'];
  /** name of the directive */
  name: Scalars['String'];
};

export type DownstreamCheckResult = {
  __typename?: 'DownstreamCheckResult';
  /**
   * Whether the downstream check workflow is causing the upstream check workflow to fail. This occurs
   * when the downstream check workflow is both failing and not ignored. This may be null while the
   * downstream check workflow is pending.
   */
  blocking?: Maybe<Scalars['Boolean']>;
  /**
   * The downstream check workflow triggered by the upstream check workflow. This may be null prior to
   * the initialization of the downstream check workflow.
   */
  downstreamWorkflow?: Maybe<CheckWorkflow>;
  /** Whether the downstream check workflow's status is ignored by the upstream check workflow. */
  ignored: Scalars['Boolean'];
  /** The parent check workflow task of this result */
  workflowTask: DownstreamCheckTask;
};

export type DownstreamCheckTask = CheckWorkflowTask & {
  __typename?: 'DownstreamCheckTask';
  completedAt?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  /**
   * Returns all triggered downstream check workflows. This may be null when the task is initializing
   * or if the task is blocked, and may be the empty list if the variant has no downstream variants.
   */
  results?: Maybe<Array<DownstreamCheckResult>>;
  status: CheckWorkflowTaskStatus;
  targetURL?: Maybe<Scalars['String']>;
  workflow: CheckWorkflow;
};

export type DuplicateOperationCollectionResult =
  | OperationCollection
  | PermissionError
  | ValidationError;

export type DurationHistogram = {
  __typename?: 'DurationHistogram';
  averageDurationMs?: Maybe<Scalars['Float']>;
  buckets: Array<DurationHistogramBucket>;
  durationMs?: Maybe<Scalars['Float']>;
  /** Counts per durationBucket, where sequences of zeroes are replaced with the negative of their size */
  sparseBuckets: Array<Scalars['Long']>;
  totalCount: Scalars['Long'];
  totalDurationMs: Scalars['Float'];
};

export type DurationHistogramDurationMsArgs = {
  percentile: Scalars['Float'];
};

export type DurationHistogramBucket = {
  __typename?: 'DurationHistogramBucket';
  count: Scalars['Long'];
  index: Scalars['Int'];
  rangeBeginMs: Scalars['Float'];
  rangeEndMs: Scalars['Float'];
};

export type EdgeServerInfo = {
  /** A randomly generated UUID, immutable for the lifetime of the edge server runtime. */
  bootId: Scalars['String'];
  /** A unique identifier for the executable GraphQL served by the edge server. length must be <= 64 characters. */
  executableSchemaId: Scalars['String'];
  /** The graph variant, defaults to 'current' */
  graphVariant?: Scalars['String'];
  /** The version of the edge server reporting agent, e.g. apollo-server-2.8, graphql-java-3.1, etc. length must be <= 256 characters. */
  libraryVersion?: InputMaybe<Scalars['String']>;
  /** The infra environment in which this edge server is running, e.g. localhost, Kubernetes, AWS Lambda, Google CloudRun, AWS ECS, etc. length must be <= 256 characters. */
  platform?: InputMaybe<Scalars['String']>;
  /** The runtime in which the edge server is running, e.g. node 12.03, zulu8.46.0.19-ca-jdk8.0.252-macosx_x64, etc. length must be <= 256 characters. */
  runtimeVersion?: InputMaybe<Scalars['String']>;
  /** If available, an identifier for the edge server instance, such that when restarting this instance it will have the same serverId, with a different bootId. For example, in Kubernetes this might be the pod name. Length must be <= 256 characters. */
  serverId?: InputMaybe<Scalars['String']>;
  /** An identifier used to distinguish the version (from the user's perspective) of the edge server's code itself. For instance, the git sha of the server's repository or the docker sha of the associated image this server runs with. Length must be <= 256 characters. */
  userVersion?: InputMaybe<Scalars['String']>;
};

/** Columns of EdgeServerInfos. */
export enum EdgeServerInfosColumn {
  BootId = 'BOOT_ID',
  ExecutableSchemaId = 'EXECUTABLE_SCHEMA_ID',
  LibraryVersion = 'LIBRARY_VERSION',
  Platform = 'PLATFORM',
  RuntimeVersion = 'RUNTIME_VERSION',
  SchemaTag = 'SCHEMA_TAG',
  ServerId = 'SERVER_ID',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  UserVersion = 'USER_VERSION',
}

export type EdgeServerInfosDimensions = {
  __typename?: 'EdgeServerInfosDimensions';
  bootId?: Maybe<Scalars['ID']>;
  executableSchemaId?: Maybe<Scalars['ID']>;
  libraryVersion?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  runtimeVersion?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serverId?: Maybe<Scalars['ID']>;
  serviceId?: Maybe<Scalars['ID']>;
  userVersion?: Maybe<Scalars['String']>;
};

/** Filter for data in EdgeServerInfos. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type EdgeServerInfosFilter = {
  and?: InputMaybe<Array<EdgeServerInfosFilter>>;
  /** Selects rows whose bootId dimension equals the given value if not null. To query for the null value, use {in: {bootId: [null]}} instead. */
  bootId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose executableSchemaId dimension equals the given value if not null. To query for the null value, use {in: {executableSchemaId: [null]}} instead. */
  executableSchemaId?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<EdgeServerInfosFilterIn>;
  /** Selects rows whose libraryVersion dimension equals the given value if not null. To query for the null value, use {in: {libraryVersion: [null]}} instead. */
  libraryVersion?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<EdgeServerInfosFilter>;
  or?: InputMaybe<Array<EdgeServerInfosFilter>>;
  /** Selects rows whose platform dimension equals the given value if not null. To query for the null value, use {in: {platform: [null]}} instead. */
  platform?: InputMaybe<Scalars['String']>;
  /** Selects rows whose runtimeVersion dimension equals the given value if not null. To query for the null value, use {in: {runtimeVersion: [null]}} instead. */
  runtimeVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serverId dimension equals the given value if not null. To query for the null value, use {in: {serverId: [null]}} instead. */
  serverId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose userVersion dimension equals the given value if not null. To query for the null value, use {in: {userVersion: [null]}} instead. */
  userVersion?: InputMaybe<Scalars['String']>;
};

/** Filter for data in EdgeServerInfos. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type EdgeServerInfosFilterIn = {
  /** Selects rows whose bootId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  bootId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose executableSchemaId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  executableSchemaId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose libraryVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  libraryVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose platform dimension is in the given list. A null value in the list means a row with null for that dimension. */
  platform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose runtimeVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  runtimeVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serverId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serverId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose userVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  userVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type EdgeServerInfosOrderBySpec = {
  column: EdgeServerInfosColumn;
  direction: Ordering;
};

export type EdgeServerInfosRecord = {
  __typename?: 'EdgeServerInfosRecord';
  /** Dimensions of EdgeServerInfos that can be grouped by. */
  groupBy: EdgeServerInfosDimensions;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export enum EmailCategory {
  Educational = 'EDUCATIONAL',
}

export type EmailPreferences = {
  __typename?: 'EmailPreferences';
  email: Scalars['String'];
  subscriptions: Array<EmailCategory>;
  unsubscribedFromAll: Scalars['Boolean'];
};

export type Error = {
  message: Scalars['String'];
};

/** Columns of ErrorStats. */
export enum ErrorStatsColumn {
  AccountId = 'ACCOUNT_ID',
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  ErrorsCount = 'ERRORS_COUNT',
  Path = 'PATH',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  RequestsWithErrorsCount = 'REQUESTS_WITH_ERRORS_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type ErrorStatsDimensions = {
  __typename?: 'ErrorStatsDimensions';
  accountId?: Maybe<Scalars['ID']>;
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in ErrorStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ErrorStatsFilter = {
  /** Selects rows whose accountId dimension equals the given value if not null. To query for the null value, use {in: {accountId: [null]}} instead. */
  accountId?: InputMaybe<Scalars['ID']>;
  and?: InputMaybe<Array<ErrorStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ErrorStatsFilterIn>;
  not?: InputMaybe<ErrorStatsFilter>;
  or?: InputMaybe<Array<ErrorStatsFilter>>;
  /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
  path?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in ErrorStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ErrorStatsFilterIn = {
  /** Selects rows whose accountId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  accountId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ErrorStatsMetrics = {
  __typename?: 'ErrorStatsMetrics';
  errorsCount: Scalars['Long'];
  requestsWithErrorsCount: Scalars['Long'];
};

export type ErrorStatsOrderBySpec = {
  column: ErrorStatsColumn;
  direction: Ordering;
};

export type ErrorStatsRecord = {
  __typename?: 'ErrorStatsRecord';
  /** Dimensions of ErrorStats that can be grouped by. */
  groupBy: ErrorStatsDimensions;
  /** Metrics of ErrorStats that can be aggregated over. */
  metrics: ErrorStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/**  Input parameters for run explorer operation event. */
export enum EventEnum {
  ClickCheckList = 'CLICK_CHECK_LIST',
  ClickGoToGraphSettings = 'CLICK_GO_TO_GRAPH_SETTINGS',
  RunExplorerOperation = 'RUN_EXPLORER_OPERATION',
}

/** Excluded operation for a graph. */
export type ExcludedOperation = {
  __typename?: 'ExcludedOperation';
  /** Operation ID to exclude from schema check. */
  ID: Scalars['ID'];
};

/** Option to filter by operation ID. */
export type ExcludedOperationInput = {
  /** Operation ID to exclude from schema check. */
  ID: Scalars['ID'];
};

export type FeatureIntros = {
  __typename?: 'FeatureIntros';
  devGraph: Scalars['Boolean'];
  federatedGraph: Scalars['Boolean'];
  freeConsumerSeats: Scalars['Boolean'];
};

/** Feature Intros Input Type */
export type FeatureIntrosInput = {
  devGraph?: InputMaybe<Scalars['Boolean']>;
  federatedGraph?: InputMaybe<Scalars['Boolean']>;
  freeConsumerSeats?: InputMaybe<Scalars['Boolean']>;
};

/** A single subgraph in a supergraph. Every supergraph managed by Apollo Studio includes at least one subgraph. See https://www.apollographql.com/docs/federation/managed-federation/overview/ for more information. */
export type FederatedImplementingService = {
  __typename?: 'FederatedImplementingService';
  /** The subgraph's current active schema, used in supergraph composition for the the associated variant. */
  activePartialSchema: PartialSchema;
  /** The timestamp when the subgraph was created. */
  createdAt: Scalars['Timestamp'];
  /** The ID of the graph this subgraph belongs to. */
  graphID: Scalars['String'];
  /** The name of the graph variant this subgraph belongs to. */
  graphVariant: Scalars['String'];
  /** The subgraph's name. */
  name: Scalars['String'];
  /** The current user-provided version/edition of the subgraph. Typically a Git SHA or docker image ID. */
  revision: Scalars['String'];
  /** The timestamp when the subgraph was most recently updated. */
  updatedAt: Scalars['Timestamp'];
  /** The URL of the subgraph's GraphQL endpoint. */
  url?: Maybe<Scalars['String']>;
};

/** A minimal representation of a federated implementing service, using only a name and partial schema SDL */
export type FederatedImplementingServicePartialSchema = {
  __typename?: 'FederatedImplementingServicePartialSchema';
  /** The name of the implementing service */
  name: Scalars['String'];
  /** The partial schema of the implementing service */
  sdl: Scalars['String'];
};

/** Container for a list of subgraphs composing a supergraph. */
export type FederatedImplementingServices = {
  __typename?: 'FederatedImplementingServices';
  /** The list of underlying subgraphs. */
  services: Array<FederatedImplementingService>;
};

/** Counts of changes at the field level, including objects, interfaces, and input fields. */
export type FieldChangeSummaryCounts = {
  __typename?: 'FieldChangeSummaryCounts';
  /** Number of changes that are additions of fields to object, interface, and input types. */
  additions: Scalars['Int'];
  /**
   * Number of changes that are field edits. This includes fields changing type and any field
   * deprecation and description changes, but also includes any argument changes and any input object
   * field changes.
   */
  edits: Scalars['Int'];
  /** Number of changes that are removals of fields from object, interface, and input types. */
  removals: Scalars['Int'];
};

/** Columns of FieldExecutions. */
export enum FieldExecutionsColumn {
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ObservedExecutionCount = 'OBSERVED_EXECUTION_COUNT',
  ParentType = 'PARENT_TYPE',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type FieldExecutionsDimensions = {
  __typename?: 'FieldExecutionsDimensions';
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in FieldExecutions. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type FieldExecutionsFilter = {
  and?: InputMaybe<Array<FieldExecutionsFilter>>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<FieldExecutionsFilterIn>;
  not?: InputMaybe<FieldExecutionsFilter>;
  or?: InputMaybe<Array<FieldExecutionsFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in FieldExecutions. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type FieldExecutionsFilterIn = {
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FieldExecutionsMetrics = {
  __typename?: 'FieldExecutionsMetrics';
  estimatedExecutionCount: Scalars['Long'];
  observedExecutionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type FieldExecutionsOrderBySpec = {
  column: FieldExecutionsColumn;
  direction: Ordering;
};

export type FieldExecutionsRecord = {
  __typename?: 'FieldExecutionsRecord';
  /** Dimensions of FieldExecutions that can be grouped by. */
  groupBy: FieldExecutionsDimensions;
  /** Metrics of FieldExecutions that can be aggregated over. */
  metrics: FieldExecutionsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of FieldLatencies. */
export enum FieldLatenciesColumn {
  FieldHistogram = 'FIELD_HISTOGRAM',
  FieldName = 'FIELD_NAME',
  ParentType = 'PARENT_TYPE',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type FieldLatenciesDimensions = {
  __typename?: 'FieldLatenciesDimensions';
  field?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in FieldLatencies. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type FieldLatenciesFilter = {
  and?: InputMaybe<Array<FieldLatenciesFilter>>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<FieldLatenciesFilterIn>;
  not?: InputMaybe<FieldLatenciesFilter>;
  or?: InputMaybe<Array<FieldLatenciesFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in FieldLatencies. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type FieldLatenciesFilterIn = {
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FieldLatenciesMetrics = {
  __typename?: 'FieldLatenciesMetrics';
  fieldHistogram: DurationHistogram;
};

export type FieldLatenciesOrderBySpec = {
  column: FieldLatenciesColumn;
  direction: Ordering;
};

export type FieldLatenciesRecord = {
  __typename?: 'FieldLatenciesRecord';
  /** Dimensions of FieldLatencies that can be grouped by. */
  groupBy: FieldLatenciesDimensions;
  /** Metrics of FieldLatencies that can be aggregated over. */
  metrics: FieldLatenciesMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of FieldRequestsByClientVersion. */
export enum FieldRequestsByClientVersionColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ObservedExecutionCount = 'OBSERVED_EXECUTION_COUNT',
  ParentType = 'PARENT_TYPE',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type FieldRequestsByClientVersionDimensions = {
  __typename?: 'FieldRequestsByClientVersionDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in FieldRequestsByClientVersion. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type FieldRequestsByClientVersionFilter = {
  and?: InputMaybe<Array<FieldRequestsByClientVersionFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<FieldRequestsByClientVersionFilterIn>;
  not?: InputMaybe<FieldRequestsByClientVersionFilter>;
  or?: InputMaybe<Array<FieldRequestsByClientVersionFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in FieldRequestsByClientVersion. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type FieldRequestsByClientVersionFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FieldRequestsByClientVersionMetrics = {
  __typename?: 'FieldRequestsByClientVersionMetrics';
  estimatedExecutionCount: Scalars['Long'];
  observedExecutionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type FieldRequestsByClientVersionOrderBySpec = {
  column: FieldRequestsByClientVersionColumn;
  direction: Ordering;
};

export type FieldRequestsByClientVersionRecord = {
  __typename?: 'FieldRequestsByClientVersionRecord';
  /** Dimensions of FieldRequestsByClientVersion that can be grouped by. */
  groupBy: FieldRequestsByClientVersionDimensions;
  /** Metrics of FieldRequestsByClientVersion that can be aggregated over. */
  metrics: FieldRequestsByClientVersionMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of FieldUsage. */
export enum FieldUsageColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  ExecutionCount = 'EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ParentType = 'PARENT_TYPE',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
}

export type FieldUsageDimensions = {
  __typename?: 'FieldUsageDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in FieldUsage. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type FieldUsageFilter = {
  and?: InputMaybe<Array<FieldUsageFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<FieldUsageFilterIn>;
  not?: InputMaybe<FieldUsageFilter>;
  or?: InputMaybe<Array<FieldUsageFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in FieldUsage. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type FieldUsageFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type FieldUsageMetrics = {
  __typename?: 'FieldUsageMetrics';
  estimatedExecutionCount: Scalars['Long'];
  executionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type FieldUsageOrderBySpec = {
  column: FieldUsageColumn;
  direction: Ordering;
};

export type FieldUsageRecord = {
  __typename?: 'FieldUsageRecord';
  /** Dimensions of FieldUsage that can be grouped by. */
  groupBy: FieldUsageDimensions;
  /** Metrics of FieldUsage that can be aggregated over. */
  metrics: FieldUsageMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type FilterBuildInput = {
  __typename?: 'FilterBuildInput';
  filterConfig: FilterConfig;
  schemaHash: Scalars['String'];
};

export type FilterConfig = {
  __typename?: 'FilterConfig';
  exclude: Array<Scalars['String']>;
  include: Array<Scalars['String']>;
};

export type FilterConfigInput = {
  exclude: Array<Scalars['String']>;
  include: Array<Scalars['String']>;
};

export type GitContext = {
  __typename?: 'GitContext';
  branch?: Maybe<Scalars['String']>;
  commit?: Maybe<Scalars['ID']>;
  commitUrl?: Maybe<Scalars['String']>;
  committer?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  remoteHost?: Maybe<GitRemoteHost>;
  remoteUrl?: Maybe<Scalars['String']>;
};

/** This is stored with a schema when it is uploaded */
export type GitContextInput = {
  branch?: InputMaybe<Scalars['String']>;
  commit?: InputMaybe<Scalars['ID']>;
  committer?: InputMaybe<Scalars['String']>;
  message?: InputMaybe<Scalars['String']>;
  remoteUrl?: InputMaybe<Scalars['String']>;
};

export enum GitRemoteHost {
  Bitbucket = 'BITBUCKET',
  Github = 'GITHUB',
  Gitlab = 'GITLAB',
}

export type GlobalExperimentalFeatures = {
  __typename?: 'GlobalExperimentalFeatures';
  operationsCollections: Scalars['Boolean'];
  sandboxesFullRelease: Scalars['Boolean'];
  sandboxesPreview: Scalars['Boolean'];
  sandboxesSchemaChecksPage: Scalars['Boolean'];
  sandboxesSchemaDiffPage: Scalars['Boolean'];
  subgraphsInSandbox: Scalars['Boolean'];
};

export type GraphApiKey = ApiKey & {
  __typename?: 'GraphApiKey';
  createdAt: Scalars['Timestamp'];
  createdBy?: Maybe<Identity>;
  id: Scalars['ID'];
  keyName?: Maybe<Scalars['String']>;
  role: UserPermission;
  token: Scalars['String'];
};

/** A union of all containers that can comprise the components of a Studio graph */
export type GraphImplementors =
  | FederatedImplementingServices
  | NonFederatedImplementingService;

/** A graph variant */
export type GraphVariant = {
  __typename?: 'GraphVariant';
  /** As new schema tags keep getting published, activeSchemaPublish refers to the latest. */
  activeSchemaPublish?: Maybe<SchemaTag>;
  buildConfig: BuildConfig;
  /** Return check configuration for this particular graph variant. */
  checkConfig: HistoricQueryParametersMerged;
  checkConfiguration: VariantCheckConfiguration;
  /** The version of composition currently in use, if applicable */
  compositionVersion?: Maybe<Scalars['String']>;
  /** Filter configuration used to create the contract schema */
  contractFilterConfig?: Maybe<FilterConfig>;
  /** Preview a Contract schema built from this source variant. */
  contractPreview: ContractPreview;
  /** @deprecated Use sharedHeaders instead */
  defaultHeaders?: Maybe<Scalars['String']>;
  derivedVariantCount: Scalars['Int'];
  /** The graph that this variant belongs to. */
  graph: Service;
  /** Graph ID of the variant. Prefer using graph { id } when feasible. */
  graphId: Scalars['String'];
  /** If the variant has managed subgraphs. */
  hasManagedSubgraphs?: Maybe<Scalars['Boolean']>;
  /** The variant's global identifier in the form `graphID@variant`. */
  id: Scalars['ID'];
  /** Represents whether this variant is a Contract. */
  isContract: Scalars['Boolean'];
  /** Is this variant one of the current user's favorite variants? */
  isFavoriteOfCurrentUser: Scalars['Boolean'];
  /**
   * If the variant has managed subgraphs.
   * @deprecated Replaced by hasManagedSubgraphs
   */
  isFederated?: Maybe<Scalars['Boolean']>;
  /** If the variant is protected */
  isProtected: Scalars['Boolean'];
  isPublic: Scalars['Boolean'];
  /** Represents whether this variant should be listed in the public variants directory. This can only be true if the variant is also public. */
  isPubliclyListed: Scalars['Boolean'];
  /** Represents whether Apollo has verified the authenticity of this public variant. This can only be true if the variant is also public. */
  isVerified: Scalars['Boolean'];
  /** Latest approved launch for the variant, and what is served through Uplink. */
  latestApprovedLaunch?: Maybe<Launch>;
  /** Latest launch for the variant, whether successful or not. */
  latestLaunch?: Maybe<Launch>;
  /** The details of the variant's most recent publication. */
  latestPublication?: Maybe<SchemaTag>;
  launch?: Maybe<Launch>;
  launchHistory: Array<Launch>;
  links?: Maybe<Array<LinkInfo>>;
  /** The variant's name (e.g., `staging`). */
  name: Scalars['String'];
  /** A list of the saved [operation collections](https://www.apollographql.com/docs/studio/explorer/operation-collections/) associated with this variant. */
  operationCollections: Array<OperationCollection>;
  /**
   * If this is true tag directives in the core schema will also appear in the
   * api schema
   * @deprecated Use buildConfig.tagInApiSchema
   */
  passTagDirectiveToApiSchema: Scalars['Boolean'];
  /** Which permissions the current user has for interacting with this variant */
  permissions: GraphVariantPermissions;
  /** Generate a federated operation plan for a given operation */
  plan?: Maybe<QueryPlan>;
  /** Explorer setting for preflight script to run before the actual GraphQL operations is run. */
  preflightScript?: Maybe<Scalars['String']>;
  readme: Readme;
  /** Registry stats for this particular graph variant */
  registryStatsWindow?: Maybe<RegistryStatsWindow>;
  /** The total number of requests for this variant in the last 24 hours */
  requestsInLastDay?: Maybe<Scalars['Long']>;
  /** If the graphql endpoint is set up to accept cookies. */
  sendCookies?: Maybe<Scalars['Boolean']>;
  /** Explorer setting for shared headers for a graph */
  sharedHeaders?: Maybe<Scalars['String']>;
  sourceVariant?: Maybe<GraphVariant>;
  /** Returns the details of the subgraph with the provided `name`, or null if this variant doesn't include a subgraph with that name. */
  subgraph?: Maybe<FederatedImplementingService>;
  /** A list of the subgraphs included in this variant. This value is null for non-federated variants. Set `includeDeleted` to `true` to include deleted subgraphs. */
  subgraphs?: Maybe<Array<FederatedImplementingService>>;
  /** The URL of the variant's GraphQL endpoint for subscription operations. */
  subscriptionUrl?: Maybe<Scalars['String']>;
  /** A list of supported directives */
  supportedDirectives?: Maybe<Array<DirectiveSupportStatus>>;
  /** The URL of the variant's GraphQL endpoint for query and mutation operations. For subscription operations, use `subscriptionUrl`. */
  url?: Maybe<Scalars['String']>;
  /** The last instant that usage information (e.g. operation stat, client stats) was reported for this variant */
  usageLastReportedAt?: Maybe<Scalars['Timestamp']>;
};

/** A graph variant */
export type GraphVariantCheckConfigArgs = {
  maxRangeInDays?: InputMaybe<Scalars['Int']>;
  overrides?: InputMaybe<HistoricQueryParameters>;
};

/** A graph variant */
export type GraphVariantContractPreviewArgs = {
  filters: FilterConfigInput;
};

/** A graph variant */
export type GraphVariantLaunchArgs = {
  id: Scalars['ID'];
};

/** A graph variant */
export type GraphVariantLaunchHistoryArgs = {
  limit?: Scalars['Int'];
};

/** A graph variant */
export type GraphVariantPlanArgs = {
  document: Scalars['GraphQLDocument'];
  operationName?: InputMaybe<Scalars['String']>;
};

/** A graph variant */
export type GraphVariantRegistryStatsWindowArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

/** A graph variant */
export type GraphVariantSubgraphArgs = {
  name: Scalars['ID'];
};

/** A graph variant */
export type GraphVariantSubgraphsArgs = {
  includeDeleted?: Scalars['Boolean'];
};

/** Result of looking up a variant by ref */
export type GraphVariantLookup = GraphVariant | InvalidRefFormat;

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutation = {
  __typename?: 'GraphVariantMutation';
  addLinkToVariant: GraphVariant;
  buildConfig?: Maybe<GraphVariant>;
  configureComposition?: Maybe<GraphVariant>;
  /** Delete the variant. */
  delete: DeleteSchemaTagResult;
  /** @deprecated Use configureComposition instead */
  enableTagAndInaccessible?: Maybe<GraphVariant>;
  /** Graph ID of the variant */
  graphId: Scalars['String'];
  /** Global identifier for the graph variant, in the form `graph@variant`. */
  id: Scalars['ID'];
  /** Name of the variant, like `variant`. */
  name: Scalars['String'];
  passTagDirectiveToApiSchema?: Maybe<GraphVariant>;
  relaunch: RelaunchResult;
  removeLinkFromVariant: GraphVariant;
  setIsFavoriteOfCurrentUser: GraphVariant;
  /** Submit a request for a Schema Check and receive a result with a workflow ID that can be used to check status, or an error message that explains what went wrong. */
  submitCheckSchemaAsync: CheckRequestResult;
  /** Submit a request for a Subgraph Schema Check and receive a result with a workflow ID that can be used to check status, or an error message that explains what went wrong. */
  submitSubgraphCheckAsync: CheckRequestResult;
  updateCheckConfigurationExcludedClients: VariantCheckConfiguration;
  updateCheckConfigurationExcludedOperations: VariantCheckConfiguration;
  updateCheckConfigurationIncludedVariants: VariantCheckConfiguration;
  updateCheckConfigurationTimeRange: VariantCheckConfiguration;
  /** @deprecated Use updateSharedHeaders instead */
  updateDefaultHeaders?: Maybe<GraphVariant>;
  updateIsProtected?: Maybe<GraphVariant>;
  updatePreflightScript?: Maybe<GraphVariant>;
  updateSendCookies?: Maybe<GraphVariant>;
  updateSharedHeaders?: Maybe<GraphVariant>;
  updateSubscriptionURL?: Maybe<GraphVariant>;
  updateURL?: Maybe<GraphVariant>;
  updateVariantIsPublic?: Maybe<GraphVariant>;
  updateVariantIsPubliclyListed?: Maybe<GraphVariant>;
  updateVariantIsVerified?: Maybe<GraphVariant>;
  /**
   * Update the [README](https://www.apollographql.com/docs/studio/org/graphs/#the-readme-page) of this variant.
   * Rate Limit of 1000/min.
   */
  updateVariantReadme?: Maybe<GraphVariant>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationAddLinkToVariantArgs = {
  title?: InputMaybe<Scalars['String']>;
  type: LinkInfoType;
  url: Scalars['String'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationBuildConfigArgs = {
  tagInApiSchema?: Scalars['Boolean'];
  version: BuildPipelineTrack;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationConfigureCompositionArgs = {
  enableTagAndInaccessible?: InputMaybe<Scalars['Boolean']>;
  version?: InputMaybe<Scalars['String']>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationEnableTagAndInaccessibleArgs = {
  enabled: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationPassTagDirectiveToApiSchemaArgs = {
  enable: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationRemoveLinkFromVariantArgs = {
  linkInfoId: Scalars['ID'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationSetIsFavoriteOfCurrentUserArgs = {
  favorite: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationSubmitCheckSchemaAsyncArgs = {
  input: CheckSchemaAsyncInput;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationSubmitSubgraphCheckAsyncArgs = {
  input: SubgraphCheckAsyncInput;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateCheckConfigurationExcludedClientsArgs = {
  appendGraphSettings: Scalars['Boolean'];
  excludedClients?: InputMaybe<Array<ClientFilterInput>>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateCheckConfigurationExcludedOperationsArgs =
  {
    appendGraphSettings: Scalars['Boolean'];
    excludedOperationNames?: InputMaybe<Array<OperationNameFilterInput>>;
    excludedOperations?: InputMaybe<Array<OperationInfoFilterInput>>;
  };

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateCheckConfigurationIncludedVariantsArgs = {
  includedVariants?: InputMaybe<Array<Scalars['String']>>;
  useGraphSettings: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateCheckConfigurationTimeRangeArgs = {
  operationCountThreshold?: InputMaybe<Scalars['Int']>;
  operationCountThresholdPercentage?: InputMaybe<Scalars['Float']>;
  timeRangeSeconds?: InputMaybe<Scalars['Long']>;
  useGraphSettings: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateDefaultHeadersArgs = {
  defaultHeaders?: InputMaybe<Scalars['String']>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateIsProtectedArgs = {
  isProtected: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdatePreflightScriptArgs = {
  preflightScript?: InputMaybe<Scalars['String']>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateSendCookiesArgs = {
  sendCookies: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateSharedHeadersArgs = {
  sharedHeaders?: InputMaybe<Scalars['String']>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateSubscriptionUrlArgs = {
  subscriptionUrl?: InputMaybe<Scalars['String']>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateUrlArgs = {
  url?: InputMaybe<Scalars['String']>;
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateVariantIsPublicArgs = {
  isPublic: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateVariantIsPubliclyListedArgs = {
  isPubliclyListed: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateVariantIsVerifiedArgs = {
  isVerified: Scalars['Boolean'];
};

/** Modifies a variant of a graph, also called a schema tag in parts of our product. */
export type GraphVariantMutationUpdateVariantReadmeArgs = {
  readme: Scalars['String'];
};

/** A map from permission String to boolean that the currently authenticated user is allowed for a particular graph variant. */
export type GraphVariantPermissions = {
  __typename?: 'GraphVariantPermissions';
  canCreateCollectionInVariant: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to manage/update the build configuration (e.g. build pipeline version) for this variant. */
  canManageBuildConfig: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to update variant-level settings for the Schema Explorer. */
  canManageExplorerSettings: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to publish schemas to this variant. */
  canPushSchemas: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to view details regarding the build configuration (e.g. build pipeline version) for this variant. */
  canQueryBuildConfig: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to download schemas associated to this variant. */
  canQuerySchemas: Scalars['Boolean'];
  canShareCollectionInVariant: Scalars['Boolean'];
  canUpdateVariantLinkInfo: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to update the README for this variant. */
  canUpdateVariantReadme: Scalars['Boolean'];
  variantId: Scalars['ID'];
};

export enum HttpMethod {
  Connect = 'CONNECT',
  Delete = 'DELETE',
  Get = 'GET',
  Head = 'HEAD',
  Options = 'OPTIONS',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT',
  Trace = 'TRACE',
  Unknown = 'UNKNOWN',
  Unrecognized = 'UNRECOGNIZED',
}

export type HistoricQueryParameters = {
  /** A list of clients to filter out during validation. */
  excludedClients?: InputMaybe<Array<ClientInfoFilter>>;
  /** A list of operation names to filter out during validation. */
  excludedOperationNames?: InputMaybe<Array<OperationNameFilterInput>>;
  from?: InputMaybe<Scalars['String']>;
  /** A list of operation IDs to filter out during validation. */
  ignoredOperations?: InputMaybe<Array<Scalars['ID']>>;
  /**
   * A list of variants to include in the validation. If no variants are provided
   * then this defaults to the "current" variant along with the base variant. The
   * base variant indicates the schema that generates diff and marks the metrics that
   * are checked for broken queries. We union this base variant with the untagged values('',
   * same as null inside of `in`, and 'current') in this metrics fetch. This strategy
   * supports users who have not tagged their metrics or schema.
   */
  includedVariants?: InputMaybe<Array<Scalars['String']>>;
  /** Minimum number of requests within the window for a query to be considered. */
  queryCountThreshold?: InputMaybe<Scalars['Int']>;
  /**
   * Number of requests within the window for a query to be considered, relative to
   * total request count. Expected values are between 0 and 0.05 (minimum 5% of total
   * request volume)
   */
  queryCountThresholdPercentage?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['String']>;
};

export type HistoricQueryParametersInput = {
  excludedClients?: InputMaybe<Array<ClientInfoFilter>>;
  excludedOperationNames?: InputMaybe<Array<OperationNameFilterInput>>;
  from?: InputMaybe<Scalars['String']>;
  ignoredOperations?: InputMaybe<Array<Scalars['ID']>>;
  includedVariants?: InputMaybe<Array<Scalars['String']>>;
  queryCountThreshold?: InputMaybe<Scalars['Int']>;
  queryCountThresholdPercentage?: InputMaybe<Scalars['Float']>;
  to?: InputMaybe<Scalars['String']>;
};

export type HistoricQueryParametersMerged = {
  __typename?: 'HistoricQueryParametersMerged';
  excludedClients: Array<ClientInfoFilterOutput>;
  excludedOperationNames: Array<OperationNameFilter>;
  from: Scalars['String'];
  fromNormalized: Scalars['Timestamp'];
  ignoredOperations: Array<Scalars['ID']>;
  includedVariants: Array<Scalars['String']>;
  queryCountThreshold: Scalars['Int'];
  queryCountThresholdPercentage: Scalars['Float'];
  to: Scalars['String'];
  toNormalized: Scalars['Timestamp'];
};

/** An identity (e.g. Anonymous, a specific User) within Apollo Studio. See implementations. */
export type Identity = {
  /** A view of the identity as an Actor type. */
  asActor: Actor;
  /** An identifier for a given identity, unique within the context of the identity type. */
  id: Scalars['ID'];
  /** A human-readable name for the identity in question. */
  name: Scalars['String'];
};

/** An actor's identity and info about the client they used to perform the action */
export type IdentityAndClientInfo = {
  __typename?: 'IdentityAndClientInfo';
  /** Client name provided when the actor performed the action */
  clientName?: Maybe<Scalars['String']>;
  /** Client version provided when the actor performed the action */
  clientVersion?: Maybe<Scalars['String']>;
  /** Identity info about the actor */
  identity?: Maybe<Identity>;
};

export type IdentityMutation = ServiceMutation | UserMutation;

export type IgnoreOperationsInChecksResult = {
  __typename?: 'IgnoreOperationsInChecksResult';
  graph: Service;
};

/** The location of the implementing service config file in storage */
export type ImplementingServiceLocation = {
  __typename?: 'ImplementingServiceLocation';
  /** The name of the implementing service */
  name: Scalars['String'];
  /** The path in storage to access the implementing service config file */
  path: Scalars['String'];
};

export type InternalAdminUser = {
  __typename?: 'InternalAdminUser';
  role: InternalMdgAdminRole;
  userID: Scalars['String'];
};

export type InternalIdentity = Identity & {
  __typename?: 'InternalIdentity';
  accounts: Array<Account>;
  asActor: Actor;
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export enum InternalMdgAdminRole {
  InternalMdgReadOnly = 'INTERNAL_MDG_READ_ONLY',
  InternalMdgSales = 'INTERNAL_MDG_SALES',
  InternalMdgSuperAdmin = 'INTERNAL_MDG_SUPER_ADMIN',
  InternalMdgSupport = 'INTERNAL_MDG_SUPPORT',
}

export type IntrospectionDirective = {
  __typename?: 'IntrospectionDirective';
  args: Array<IntrospectionInputValue>;
  description?: Maybe<Scalars['String']>;
  locations: Array<IntrospectionDirectiveLocation>;
  name: Scalars['String'];
};

export type IntrospectionDirectiveInput = {
  args: Array<IntrospectionInputValueInput>;
  description?: InputMaybe<Scalars['String']>;
  isRepeatable?: InputMaybe<Scalars['Boolean']>;
  locations: Array<IntrospectionDirectiveLocation>;
  name: Scalars['String'];
};

/** __DirectiveLocation introspection type */
export enum IntrospectionDirectiveLocation {
  /** Location adjacent to an argument definition. */
  ArgumentDefinition = 'ARGUMENT_DEFINITION',
  /** Location adjacent to an enum definition. */
  Enum = 'ENUM',
  /** Location adjacent to an enum value definition. */
  EnumValue = 'ENUM_VALUE',
  /** Location adjacent to a field. */
  Field = 'FIELD',
  /** Location adjacent to a field definition. */
  FieldDefinition = 'FIELD_DEFINITION',
  /** Location adjacent to a fragment definition. */
  FragmentDefinition = 'FRAGMENT_DEFINITION',
  /** Location adjacent to a fragment spread. */
  FragmentSpread = 'FRAGMENT_SPREAD',
  /** Location adjacent to an inline fragment. */
  InlineFragment = 'INLINE_FRAGMENT',
  /** Location adjacent to an input object field definition. */
  InputFieldDefinition = 'INPUT_FIELD_DEFINITION',
  /** Location adjacent to an input object type definition. */
  InputObject = 'INPUT_OBJECT',
  /** Location adjacent to an interface definition. */
  Interface = 'INTERFACE',
  /** Location adjacent to a mutation operation. */
  Mutation = 'MUTATION',
  /** Location adjacent to an object type definition. */
  Object = 'OBJECT',
  /** Location adjacent to a query operation. */
  Query = 'QUERY',
  /** Location adjacent to a scalar definition. */
  Scalar = 'SCALAR',
  /** Location adjacent to a schema definition. */
  Schema = 'SCHEMA',
  /** Location adjacent to a subscription operation. */
  Subscription = 'SUBSCRIPTION',
  /** Location adjacent to a union definition. */
  Union = 'UNION',
  /** Location adjacent to a variable definition. */
  VariableDefinition = 'VARIABLE_DEFINITION',
}

/** Values associated with introspection result for an enum value */
export type IntrospectionEnumValue = {
  __typename?: 'IntrospectionEnumValue';
  /** @deprecated Use deprecationReason instead */
  depreactionReason?: Maybe<Scalars['String']>;
  deprecationReason?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  name: Scalars['String'];
};

/** __EnumValue introspection type */
export type IntrospectionEnumValueInput = {
  deprecationReason?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  name: Scalars['String'];
};

/** Values associated with introspection result for field */
export type IntrospectionField = {
  __typename?: 'IntrospectionField';
  args: Array<IntrospectionInputValue>;
  deprecationReason?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  name: Scalars['String'];
  type: IntrospectionType;
};

/** __Field introspection type */
export type IntrospectionFieldInput = {
  args: Array<IntrospectionInputValueInput>;
  deprecationReason?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isDeprecated: Scalars['Boolean'];
  name: Scalars['String'];
  type: IntrospectionTypeInput;
};

/** Values associated with introspection result for an input field */
export type IntrospectionInputValue = {
  __typename?: 'IntrospectionInputValue';
  defaultValue?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: IntrospectionType;
};

/** __Value introspection type */
export type IntrospectionInputValueInput = {
  defaultValue?: InputMaybe<Scalars['String']>;
  deprecationReason?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  isDeprecated?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  type: IntrospectionTypeInput;
};

export type IntrospectionSchema = {
  __typename?: 'IntrospectionSchema';
  directives: Array<IntrospectionDirective>;
  mutationType?: Maybe<IntrospectionType>;
  queryType: IntrospectionType;
  subscriptionType?: Maybe<IntrospectionType>;
  types: Array<IntrospectionType>;
};

export type IntrospectionSchemaTypesArgs = {
  filter?: InputMaybe<TypeFilterConfig>;
};

/** __Schema introspection type */
export type IntrospectionSchemaInput = {
  description?: InputMaybe<Scalars['String']>;
  directives: Array<IntrospectionDirectiveInput>;
  mutationType?: InputMaybe<IntrospectionTypeRefInput>;
  queryType: IntrospectionTypeRefInput;
  subscriptionType?: InputMaybe<IntrospectionTypeRefInput>;
  types?: InputMaybe<Array<IntrospectionTypeInput>>;
};

/** Object containing all possible values for an introspectionType */
export type IntrospectionType = {
  __typename?: 'IntrospectionType';
  /** the base kind of the type this references, ignoring lists and nullability */
  baseKind?: Maybe<IntrospectionTypeKind>;
  description?: Maybe<Scalars['String']>;
  enumValues?: Maybe<Array<IntrospectionEnumValue>>;
  fields?: Maybe<Array<IntrospectionField>>;
  inputFields?: Maybe<Array<IntrospectionInputValue>>;
  interfaces?: Maybe<Array<IntrospectionType>>;
  kind?: Maybe<IntrospectionTypeKind>;
  name?: Maybe<Scalars['String']>;
  ofType?: Maybe<IntrospectionType>;
  possibleTypes?: Maybe<Array<IntrospectionType>>;
  /** printed representation of type, including nested nullability and list ofTypes */
  printed: Scalars['String'];
};

/** Object containing all possible values for an introspectionType */
export type IntrospectionTypeEnumValuesArgs = {
  includeDeprecated?: InputMaybe<Scalars['Boolean']>;
};

/** __Type introspection type */
export type IntrospectionTypeInput = {
  description?: InputMaybe<Scalars['String']>;
  enumValues?: InputMaybe<Array<IntrospectionEnumValueInput>>;
  fields?: InputMaybe<Array<IntrospectionFieldInput>>;
  inputFields?: InputMaybe<Array<IntrospectionInputValueInput>>;
  interfaces?: InputMaybe<Array<IntrospectionTypeInput>>;
  kind: IntrospectionTypeKind;
  name?: InputMaybe<Scalars['String']>;
  ofType?: InputMaybe<IntrospectionTypeInput>;
  possibleTypes?: InputMaybe<Array<IntrospectionTypeInput>>;
  specifiedByUrl?: InputMaybe<Scalars['String']>;
};

export enum IntrospectionTypeKind {
  /** Indicates this type is an enum. 'enumValues' is a valid field. */
  Enum = 'ENUM',
  /** Indicates this type is an input object. 'inputFields' is a valid field. */
  InputObject = 'INPUT_OBJECT',
  /**
   * Indicates this type is an interface. 'fields' and 'possibleTypes' are valid
   * fields
   */
  Interface = 'INTERFACE',
  /** Indicates this type is a list. 'ofType' is a valid field. */
  List = 'LIST',
  /** Indicates this type is a non-null. 'ofType' is a valid field. */
  NonNull = 'NON_NULL',
  /** Indicates this type is an object. 'fields' and 'interfaces' are valid fields. */
  Object = 'OBJECT',
  /** Indicates this type is a scalar. */
  Scalar = 'SCALAR',
  /** Indicates this type is a union. 'possibleTypes' is a valid field. */
  Union = 'UNION',
}

/** Shallow __Type introspection type */
export type IntrospectionTypeRefInput = {
  kind?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type InvalidInputError = {
  __typename?: 'InvalidInputError';
  message: Scalars['String'];
};

export type InvalidOperation = {
  __typename?: 'InvalidOperation';
  errors?: Maybe<Array<OperationValidationError>>;
  signature: Scalars['ID'];
};

/** Type returned by reference lookup when the reference was invalid */
export type InvalidRefFormat = Error & {
  __typename?: 'InvalidRefFormat';
  message: Scalars['String'];
};

export type InvalidTarget = Error & {
  __typename?: 'InvalidTarget';
  message: Scalars['String'];
};

export type Invoice = {
  __typename?: 'Invoice';
  closedAt?: Maybe<Scalars['Timestamp']>;
  collectionMethod?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  invoiceNumber: Scalars['Int'];
  state: InvoiceState;
  totalInCents: Scalars['Int'];
  updatedAt: Scalars['Timestamp'];
  uuid: Scalars['ID'];
};

export enum InvoiceState {
  Collected = 'COLLECTED',
  Failed = 'FAILED',
  Open = 'OPEN',
  PastDue = 'PAST_DUE',
  Unknown = 'UNKNOWN',
}

export enum InvoiceStateV2 {
  Collected = 'COLLECTED',
  Failed = 'FAILED',
  Open = 'OPEN',
  PastDue = 'PAST_DUE',
  Unknown = 'UNKNOWN',
}

export type InvoiceV2 = {
  __typename?: 'InvoiceV2';
  closedAt?: Maybe<Scalars['Timestamp']>;
  collectionMethod?: Maybe<Scalars['String']>;
  createdAt: Scalars['Timestamp'];
  invoiceNumber: Scalars['Int'];
  state: InvoiceStateV2;
  totalInCents: Scalars['Int'];
  updatedAt: Scalars['Timestamp'];
  uuid: Scalars['ID'];
};

/** Represents the complete process of making a set of updates to a deployed graph variant. */
export type Launch = {
  __typename?: 'Launch';
  /** The timestamp when the launch was approved. */
  approvedAt?: Maybe<Scalars['Timestamp']>;
  /** The associated build for this launch (a build includes schema composition and contract filtering). This value is null until the build is initiated. */
  build?: Maybe<Build>;
  /** The inputs provided to this launch's associated build, including subgraph schemas and contract filters. */
  buildInput: BuildInput;
  /** The timestamp when the launch completed. This value is null until the launch completes. */
  completedAt?: Maybe<Scalars['Timestamp']>;
  /** The timestamp when the launch was initiated. */
  createdAt: Scalars['Timestamp'];
  /** Contract launches that were triggered by this launch. */
  downstreamLaunches: Array<Launch>;
  /** The ID of the launch's associated graph. */
  graphId: Scalars['String'];
  /** The name of the launch's associated variant. */
  graphVariant: Scalars['String'];
  /** The unique identifier for this launch. */
  id: Scalars['ID'];
  isAvailable?: Maybe<Scalars['Boolean']>;
  /** Whether the launch completed. */
  isCompleted?: Maybe<Scalars['Boolean']>;
  /** Whether the result of the launch has been published to the associated graph and variant. This is always false for a failed launch. */
  isPublished?: Maybe<Scalars['Boolean']>;
  isTarget?: Maybe<Scalars['Boolean']>;
  /** The most recent launch sequence step that has started but not necessarily completed. */
  latestSequenceStep?: Maybe<LaunchSequenceStep>;
  /** A specific publication of a graph variant pertaining to this launch. */
  publication?: Maybe<SchemaTag>;
  /** A list of results from the completed launch. The items included in this list vary depending on whether the launch succeeded, failed, or was superseded. */
  results: Array<LaunchResult>;
  schemaTag?: Maybe<SchemaTag>;
  /** A list of all serial steps in the launch sequence. This list can change as the launch progresses. For example, a `LaunchCompletedStep` is appended after a launch completes. */
  sequence: Array<LaunchSequenceStep>;
  /** A shortened version of `Launch.id` that includes only the first 8 characters. */
  shortenedID: Scalars['String'];
  /** The launch's status. If a launch is superseded, its status remains `LAUNCH_INITIATED`. To check for a superseded launch, use `supersededAt`. */
  status: LaunchStatus;
  /** A list of subgraph changes that are included in this launch. */
  subgraphChanges?: Maybe<Array<SubgraphChange>>;
  /** The timestamp when this launch was superseded by another launch. If an active launch is superseded, it terminates. */
  supersededAt?: Maybe<Scalars['Timestamp']>;
  /** The launch that superseded this launch, if any. If an active launch is superseded, it terminates. */
  supersededBy?: Maybe<Launch>;
  /** The source variant launch that caused this launch to be initiated. This value is present only for contract variant launches. Otherwise, it's null. */
  upstreamLaunch?: Maybe<Launch>;
};

/** more result types will be supported in the future */
export type LaunchResult = ChangelogLaunchResult;

/** The timing details for the build step of a launch. */
export type LaunchSequenceBuildStep = {
  __typename?: 'LaunchSequenceBuildStep';
  completedAt?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
};

/** The timing details for the checks step of a launch. */
export type LaunchSequenceCheckStep = {
  __typename?: 'LaunchSequenceCheckStep';
  completedAt?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
};

/** The timing details for the completion step of a launch. */
export type LaunchSequenceCompletedStep = {
  __typename?: 'LaunchSequenceCompletedStep';
  completedAt?: Maybe<Scalars['Timestamp']>;
};

/** The timing details for the initiation step of a launch. */
export type LaunchSequenceInitiatedStep = {
  __typename?: 'LaunchSequenceInitiatedStep';
  startedAt?: Maybe<Scalars['Timestamp']>;
};

/** The timing details for the publish step of a launch. */
export type LaunchSequencePublishStep = {
  __typename?: 'LaunchSequencePublishStep';
  completedAt?: Maybe<Scalars['Timestamp']>;
  startedAt?: Maybe<Scalars['Timestamp']>;
};

/** Represents the various steps that occur in sequence during a single launch. */
export type LaunchSequenceStep =
  | LaunchSequenceBuildStep
  | LaunchSequenceCheckStep
  | LaunchSequenceCompletedStep
  | LaunchSequenceInitiatedStep
  | LaunchSequencePublishStep
  | LaunchSequenceSupersededStep;

/** The timing details for the superseded step of a launch. This step occurs only if the launch is superseded by another launch. */
export type LaunchSequenceSupersededStep = {
  __typename?: 'LaunchSequenceSupersededStep';
  completedAt?: Maybe<Scalars['Timestamp']>;
};

export enum LaunchStatus {
  LaunchCompleted = 'LAUNCH_COMPLETED',
  LaunchFailed = 'LAUNCH_FAILED',
  LaunchInitiated = 'LAUNCH_INITIATED',
}

export type LinkInfo = {
  __typename?: 'LinkInfo';
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type: LinkInfoType;
  url: Scalars['String'];
};

export enum LinkInfoType {
  DeveloperPortal = 'DEVELOPER_PORTAL',
  Other = 'OTHER',
  Repository = 'REPOSITORY',
}

export type MarkChangesForOperationAsSafeResult = {
  __typename?: 'MarkChangesForOperationAsSafeResult';
  /**
   * Nice to have for the frontend since the Apollo cache is already watching for AffectedQuery to update.
   * This might return null if no behavior changes were found for the affected operation ID.
   * This is a weird situation that should never happen.
   */
  affectedOperation?: Maybe<AffectedQuery>;
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type MediaUploadInfo = {
  __typename?: 'MediaUploadInfo';
  csrfToken: Scalars['String'];
  maxContentLength: Scalars['Int'];
  url: Scalars['String'];
};

export type MoveOperationCollectionEntryResult =
  | InvalidTarget
  | MoveOperationCollectionEntrySuccess
  | PermissionError;

export type MoveOperationCollectionEntrySuccess = {
  __typename?: 'MoveOperationCollectionEntrySuccess';
  operation: OperationCollectionEntry;
  originCollection: OperationCollection;
  targetCollection: OperationCollection;
};

export type Mutation = {
  __typename?: 'Mutation';
  account?: Maybe<AccountMutation>;
  billing?: Maybe<BillingMutation>;
  /** Creates an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/) for a given variant, or creates a [sandbox collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/#sandbox-collections) without an associated variant. */
  createOperationCollection: CreateOperationCollectionResult;
  /**
   * Finalize a password reset with a token included in the E-mail link,
   * returns the corresponding login email when successful
   */
  finalizePasswordReset?: Maybe<Scalars['String']>;
  /** Provides access to mutation fields for modifying a Studio graph with the provided ID. */
  graph?: Maybe<ServiceMutation>;
  /** Join an account with a token */
  joinAccount?: Maybe<Account>;
  me?: Maybe<IdentityMutation>;
  newAccount?: Maybe<Account>;
  newService?: Maybe<Service>;
  operationCollection?: Maybe<OperationCollectionMutation>;
  /** Report a running GraphQL server's schema. */
  reportSchema?: Maybe<ReportSchemaResult>;
  /** Ask for a user's password to be reset by E-mail */
  resetPassword?: Maybe<Scalars['Void']>;
  resolveAllInternalCronExecutions?: Maybe<Scalars['Void']>;
  resolveInternalCronExecution?: Maybe<CronExecution>;
  service?: Maybe<ServiceMutation>;
  /** Set the subscriptions for a given email */
  setSubscriptions?: Maybe<EmailPreferences>;
  /** Set the studio settings for the current user */
  setUserSettings?: Maybe<UserSettings>;
  signUp?: Maybe<User>;
  /** This is called by the form shown to users after they delete their user or organization account. */
  submitPostDeletionFeedback?: Maybe<Scalars['Void']>;
  /** Mutation for basic engagement tracking in studio */
  track?: Maybe<Scalars['Void']>;
  /** Rover session tracking. Reserved to https://rover.apollo.dev/telemetry (https://github.com/apollographql/orbiter). */
  trackRoverSession?: Maybe<Scalars['Void']>;
  /** Unsubscribe a given email from all emails */
  unsubscribeFromAll?: Maybe<EmailPreferences>;
  user?: Maybe<UserMutation>;
};

export type MutationAccountArgs = {
  id: Scalars['ID'];
};

export type MutationCreateOperationCollectionArgs = {
  description?: InputMaybe<Scalars['String']>;
  isSandbox: Scalars['Boolean'];
  isShared: Scalars['Boolean'];
  minEditRole?: InputMaybe<UserPermission>;
  name: Scalars['String'];
  variantRefs?: InputMaybe<Array<Scalars['ID']>>;
};

export type MutationFinalizePasswordResetArgs = {
  newPassword: Scalars['String'];
  resetToken: Scalars['String'];
};

export type MutationGraphArgs = {
  id: Scalars['ID'];
};

export type MutationJoinAccountArgs = {
  accountId: Scalars['ID'];
  joinToken: Scalars['String'];
};

export type MutationNewAccountArgs = {
  companyUrl?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
};

export type MutationNewServiceArgs = {
  accountId: Scalars['ID'];
  description?: InputMaybe<Scalars['String']>;
  hiddenFromUninvitedNonAdminAccountMembers?: Scalars['Boolean'];
  id: Scalars['ID'];
  isDev?: Scalars['Boolean'];
  name?: InputMaybe<Scalars['String']>;
  onboardingArchitecture?: InputMaybe<OnboardingArchitecture>;
  title?: InputMaybe<Scalars['String']>;
};

export type MutationOperationCollectionArgs = {
  id: Scalars['ID'];
};

export type MutationReportSchemaArgs = {
  coreSchema?: InputMaybe<Scalars['String']>;
  report: SchemaReport;
};

export type MutationResetPasswordArgs = {
  email: Scalars['String'];
};

export type MutationResolveAllInternalCronExecutionsArgs = {
  group?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type MutationResolveInternalCronExecutionArgs = {
  id: Scalars['ID'];
};

export type MutationServiceArgs = {
  id: Scalars['ID'];
};

export type MutationSetSubscriptionsArgs = {
  email: Scalars['String'];
  subscriptions: Array<EmailCategory>;
  token: Scalars['String'];
};

export type MutationSetUserSettingsArgs = {
  newSettings?: InputMaybe<UserSettingsInput>;
};

export type MutationSignUpArgs = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
  referrer?: InputMaybe<Scalars['String']>;
  trackingGoogleClientId?: InputMaybe<Scalars['String']>;
  trackingMarketoClientId?: InputMaybe<Scalars['String']>;
  userSegment?: InputMaybe<UserSegment>;
  utmCampaign?: InputMaybe<Scalars['String']>;
  utmMedium?: InputMaybe<Scalars['String']>;
  utmSource?: InputMaybe<Scalars['String']>;
};

export type MutationSubmitPostDeletionFeedbackArgs = {
  feedback: Scalars['String'];
  targetIdentifier: Scalars['ID'];
  targetType: DeletionTargetType;
};

export type MutationTrackArgs = {
  event: EventEnum;
  graphID: Scalars['String'];
  graphVariant?: Scalars['String'];
};

export type MutationTrackRoverSessionArgs = {
  anonymousId: Scalars['ID'];
  arguments: Array<RoverArgumentInput>;
  ci?: InputMaybe<Scalars['String']>;
  command: Scalars['String'];
  cwdHash: Scalars['SHA256'];
  os: Scalars['String'];
  remoteUrlHash?: InputMaybe<Scalars['SHA256']>;
  sessionId: Scalars['ID'];
  version: Scalars['String'];
};

export type MutationUnsubscribeFromAllArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type MutationUserArgs = {
  id: Scalars['ID'];
};

export type NamedIntrospectionArg = {
  __typename?: 'NamedIntrospectionArg';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type NamedIntrospectionArgNoDescription = {
  __typename?: 'NamedIntrospectionArgNoDescription';
  name?: Maybe<Scalars['String']>;
};

/**
 * The shared fields for a named introspection type. Currently this is returned for the
 * top level value affected by a change. In the future, we may update this
 * type to be an interface, which is extended by the more specific types:
 * scalar, object, input object, union, interface, and enum
 *
 * For an in-depth look at where these types come from, see:
 * https://github.com/DefinitelyTyped/DefinitelyTyped/blob/659eb50d3/types/graphql/utilities/introspectionQuery.d.ts#L31-L37
 */
export type NamedIntrospectionType = {
  __typename?: 'NamedIntrospectionType';
  description?: Maybe<Scalars['String']>;
  kind?: Maybe<IntrospectionTypeKind>;
  name?: Maybe<Scalars['String']>;
};

export type NamedIntrospectionTypeNoDescription = {
  __typename?: 'NamedIntrospectionTypeNoDescription';
  name?: Maybe<Scalars['String']>;
};

/**
 * Introspection values that can be children of other types for changes, such
 * as input fields, objects in interfaces, enum values. In the future, this
 * value could become an interface to allow fields specific to the types
 * returned.
 */
export type NamedIntrospectionValue = {
  __typename?: 'NamedIntrospectionValue';
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  printedType?: Maybe<Scalars['String']>;
};

export type NamedIntrospectionValueNoDescription = {
  __typename?: 'NamedIntrospectionValueNoDescription';
  name?: Maybe<Scalars['String']>;
  printedType?: Maybe<Scalars['String']>;
};

/** A non-federated service for a monolithic graph. */
export type NonFederatedImplementingService = {
  __typename?: 'NonFederatedImplementingService';
  /** Timestamp of when this implementing service was created. */
  createdAt: Scalars['Timestamp'];
  /**
   * Identifies which graph this non-implementing service belongs to.
   * Formerly known as "service_id".
   */
  graphID: Scalars['String'];
  /**
   * Specifies which variant of a graph this implementing service belongs to".
   * Formerly known as "tag".
   */
  graphVariant: Scalars['String'];
};

export type NotFoundError = Error & {
  __typename?: 'NotFoundError';
  message: Scalars['String'];
};

export type OdysseyAttempt = {
  __typename?: 'OdysseyAttempt';
  completedAt?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  pass?: Maybe<Scalars['Boolean']>;
  responses: Array<OdysseyResponse>;
  startedAt: Scalars['Timestamp'];
  testId: Scalars['String'];
};

export type OdysseyCertification = {
  __typename?: 'OdysseyCertification';
  certificationId: Scalars['String'];
  earnedAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  owner?: Maybe<OdysseyCertificationOwner>;
  source?: Maybe<Scalars['String']>;
};

export type OdysseyCertificationOwner = {
  __typename?: 'OdysseyCertificationOwner';
  fullName: Scalars['String'];
  id: Scalars['ID'];
};

export type OdysseyCourse = {
  __typename?: 'OdysseyCourse';
  completedAt?: Maybe<Scalars['Timestamp']>;
  enrolledAt?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
};

export type OdysseyCourseInput = {
  completedAt?: InputMaybe<Scalars['Timestamp']>;
  courseId: Scalars['String'];
};

export type OdysseyResponse = {
  __typename?: 'OdysseyResponse';
  correct: Scalars['Boolean'];
  id: Scalars['ID'];
  questionId: Scalars['String'];
  values: Array<OdysseyValue>;
};

export type OdysseyResponseInput = {
  attemptId: Scalars['ID'];
  correct: Scalars['Boolean'];
  questionId: Scalars['String'];
  values: Array<Scalars['String']>;
};

export type OdysseyTask = {
  __typename?: 'OdysseyTask';
  completedAt?: Maybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  value?: Maybe<Scalars['String']>;
};

export type OdysseyTaskInput = {
  completedAt?: InputMaybe<Scalars['Timestamp']>;
  taskId: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type OdysseyValue = {
  __typename?: 'OdysseyValue';
  id: Scalars['ID'];
  value: Scalars['String'];
};

export enum OnboardingArchitecture {
  Monolith = 'MONOLITH',
  Supergraph = 'SUPERGRAPH',
}

export type Operation = {
  __typename?: 'Operation';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  signature?: Maybe<Scalars['String']>;
  truncated: Scalars['Boolean'];
};

export type OperationAcceptedChange = {
  __typename?: 'OperationAcceptedChange';
  acceptedAt: Scalars['Timestamp'];
  acceptedBy: Identity;
  change: StoredApprovedChange;
  checkID: Scalars['ID'];
  graphID: Scalars['ID'];
  id: Scalars['ID'];
  operationID: Scalars['String'];
};

/** Columns of OperationCheckStats. */
export enum OperationCheckStatsColumn {
  CachedRequestsCount = 'CACHED_REQUESTS_COUNT',
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  UncachedRequestsCount = 'UNCACHED_REQUESTS_COUNT',
}

export type OperationCheckStatsDimensions = {
  __typename?: 'OperationCheckStatsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in OperationCheckStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type OperationCheckStatsFilter = {
  and?: InputMaybe<Array<OperationCheckStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<OperationCheckStatsFilterIn>;
  not?: InputMaybe<OperationCheckStatsFilter>;
  or?: InputMaybe<Array<OperationCheckStatsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in OperationCheckStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type OperationCheckStatsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type OperationCheckStatsMetrics = {
  __typename?: 'OperationCheckStatsMetrics';
  cachedRequestsCount: Scalars['Long'];
  uncachedRequestsCount: Scalars['Long'];
};

export type OperationCheckStatsOrderBySpec = {
  column: OperationCheckStatsColumn;
  direction: Ordering;
};

export type OperationCheckStatsRecord = {
  __typename?: 'OperationCheckStatsRecord';
  /** Dimensions of OperationCheckStats that can be grouped by. */
  groupBy: OperationCheckStatsDimensions;
  /** Metrics of OperationCheckStats that can be aggregated over. */
  metrics: OperationCheckStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** A list of saved GraphQL operations. */
export type OperationCollection = {
  __typename?: 'OperationCollection';
  /** The timestamp when the collection was created. */
  createdAt: Scalars['Timestamp'];
  /** The user or other entity that created the collection. */
  createdBy?: Maybe<Identity>;
  /** The collection's description. A `null` description was never set, and empty string description was set to be empty string by a user, or other entity. */
  description?: Maybe<Scalars['String']>;
  /**
   * If a user has any of these roles, they will be able to edit this
   * collection.
   * @deprecated deprecated in favour of minEditRole
   */
  editRoles?: Maybe<Array<UserPermission>>;
  id: Scalars['ID'];
  /** Whether the current user has marked the collection as a favorite. */
  isFavorite: Scalars['Boolean'];
  /** Whether the collection is a [sandbox collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/#sandbox-collections). */
  isSandbox: Scalars['Boolean'];
  /** Whether the collection is shared across its associated organization. */
  isShared: Scalars['Boolean'];
  /** The timestamp when the collection was most recently updated. */
  lastUpdatedAt: Scalars['Timestamp'];
  /** The user or other entity that most recently updated the collection. */
  lastUpdatedBy?: Maybe<Identity>;
  /** The minimum role a user needs to edit this collection. Valid values: null, CONSUMER, OBSERVER, DOCUMENTER, CONTRIBUTOR, GRAPH_ADMIN. This value is always `null` if `isShared` is `false`. If `null` when `isShared` is `true`, the minimum role is `GRAPH_ADMIN`. */
  minEditRole?: Maybe<UserPermission>;
  /** The collection's name. */
  name: Scalars['String'];
  /** Returns the operation in the collection with the specified ID, if any. */
  operation?: Maybe<OperationCollectionEntryResult>;
  /** A list of the GraphQL operations that belong to the collection. */
  operations: Array<OperationCollectionEntry>;
  /** The permissions that the current user has for the collection. */
  permissions: OperationCollectionPermissions;
  variants: Array<GraphVariant>;
};

/** A list of saved GraphQL operations. */
export type OperationCollectionOperationArgs = {
  id: Scalars['ID'];
};

/** A saved operation entry within an Operation Collection. */
export type OperationCollectionEntry = {
  __typename?: 'OperationCollectionEntry';
  collection: OperationCollection;
  /** The timestamp when the entry was created. */
  createdAt: Scalars['Timestamp'];
  /** The user or other entity that created the entry. */
  createdBy?: Maybe<Identity>;
  /** Details of the entry's associated operation, such as its `body` and `variables`. */
  currentOperationRevision: OperationCollectionEntryState;
  id: Scalars['ID'];
  /** The timestamp when the entry was most recently updated. */
  lastUpdatedAt: Scalars['Timestamp'];
  /** The user or other entity that most recently updated the entry. */
  lastUpdatedBy?: Maybe<Identity>;
  /** The entry's name. */
  name: Scalars['String'];
  /** The entry's lexicographical ordering index within its containing collection. */
  orderingIndex: Scalars['String'];
};

/** Provides fields for modifying an operation in a collection. */
export type OperationCollectionEntryMutation = {
  __typename?: 'OperationCollectionEntryMutation';
  moveToCollection: MoveOperationCollectionEntryResult;
  reorderEntry?: Maybe<UpdateOperationCollectionResult>;
  /** Updates the name of an operation. */
  updateName?: Maybe<UpdateOperationCollectionEntryResult>;
  /** Updates the body, headers, and/or variables of an operation. */
  updateValues?: Maybe<UpdateOperationCollectionEntryResult>;
};

/** Provides fields for modifying an operation in a collection. */
export type OperationCollectionEntryMutationMoveToCollectionArgs = {
  collectionId: Scalars['ID'];
  lowerOrderingBound?: InputMaybe<Scalars['String']>;
  upperOrderingBound?: InputMaybe<Scalars['String']>;
};

/** Provides fields for modifying an operation in a collection. */
export type OperationCollectionEntryMutationReorderEntryArgs = {
  lowerOrderingBound?: InputMaybe<Scalars['String']>;
  upperOrderingBound?: InputMaybe<Scalars['String']>;
};

/** Provides fields for modifying an operation in a collection. */
export type OperationCollectionEntryMutationUpdateNameArgs = {
  name: Scalars['String'];
};

/** Provides fields for modifying an operation in a collection. */
export type OperationCollectionEntryMutationUpdateValuesArgs = {
  operationInput: OperationCollectionEntryStateInput;
};

export type OperationCollectionEntryMutationResult =
  | NotFoundError
  | OperationCollectionEntryMutation
  | PermissionError;

export type OperationCollectionEntryResult =
  | NotFoundError
  | OperationCollectionEntry;

/** The most recent body, variable and header values of a saved operation entry. */
export type OperationCollectionEntryState = {
  __typename?: 'OperationCollectionEntryState';
  /** The raw body of the entry's GraphQL operation. */
  body: Scalars['String'];
  /** The timestamp when the entry state was created. */
  createdAt: Scalars['Timestamp'];
  /** The user or other entity that created this entry state. */
  createdBy?: Maybe<Identity>;
  /** Headers for the entry's GraphQL operation. */
  headers?: Maybe<Array<OperationHeader>>;
  /** Variables for the entry's GraphQL operation, as a JSON string. */
  variables?: Maybe<Scalars['String']>;
};

/** Fields for creating or modifying an operation collection entry. */
export type OperationCollectionEntryStateInput = {
  /** The operation's query body. */
  body: Scalars['String'];
  /** The operation's headers. */
  headers?: InputMaybe<Array<OperationHeaderInput>>;
  /** The operation's variables. */
  variables?: InputMaybe<Scalars['String']>;
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutation = {
  __typename?: 'OperationCollectionMutation';
  /** Adds an operation to this collection. */
  addOperation?: Maybe<AddOperationCollectionEntryResult>;
  /** @deprecated Will throw NotImplemented */
  addToVariant: AddOperationCollectionToVariantResult;
  /** Deletes this operation collection. This also deletes all of the collection's associated operations. */
  delete?: Maybe<DeleteOperationCollectionResult>;
  /** Deletes an operation from this collection. */
  deleteOperation?: Maybe<RemoveOperationCollectionEntryResult>;
  duplicateCollection: DuplicateOperationCollectionResult;
  operation?: Maybe<OperationCollectionEntryMutationResult>;
  /** @deprecated Will throw NotImplemented */
  removeFromVariant: RemoveOperationCollectionFromVariantResult;
  /** Updates the minimum role a user needs to be able to modify this collection. */
  setMinEditRole?: Maybe<UpdateOperationCollectionResult>;
  /** Updates this collection's description. */
  updateDescription?: Maybe<UpdateOperationCollectionResult>;
  /** Updates whether the current user has marked this collection as a favorite. */
  updateIsFavorite?: Maybe<UpdateOperationCollectionResult>;
  /** Updates whether this collection is shared across its associated organization. */
  updateIsShared?: Maybe<UpdateOperationCollectionResult>;
  /** Updates this operation collection's name. */
  updateName?: Maybe<UpdateOperationCollectionResult>;
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationAddOperationArgs = {
  name: Scalars['String'];
  operationInput: OperationCollectionEntryStateInput;
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationAddToVariantArgs = {
  variantRef: Scalars['ID'];
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationDeleteOperationArgs = {
  id: Scalars['ID'];
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationDuplicateCollectionArgs = {
  description?: InputMaybe<Scalars['String']>;
  isSandbox: Scalars['Boolean'];
  isShared: Scalars['Boolean'];
  name: Scalars['String'];
  variantRef?: InputMaybe<Scalars['ID']>;
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationOperationArgs = {
  id: Scalars['ID'];
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationRemoveFromVariantArgs = {
  variantRef: Scalars['ID'];
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationSetMinEditRoleArgs = {
  editRole?: InputMaybe<UserPermission>;
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationUpdateDescriptionArgs = {
  description?: InputMaybe<Scalars['String']>;
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationUpdateIsFavoriteArgs = {
  isFavorite: Scalars['Boolean'];
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationUpdateIsSharedArgs = {
  isShared: Scalars['Boolean'];
};

/** Provides fields for modifying an [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/). */
export type OperationCollectionMutationUpdateNameArgs = {
  name: Scalars['String'];
};

/** Whether the current user can perform various actions on the associated collection. */
export type OperationCollectionPermissions = {
  __typename?: 'OperationCollectionPermissions';
  /** Whether the current user can edit operations in the associated collection. */
  canEditOperations: Scalars['Boolean'];
  /** Whether the current user can delete or update the associated collection's metadata, such as its name and description. */
  canManage: Scalars['Boolean'];
  /** Whether the current user can read operations in the associated collection. */
  canReadOperations: Scalars['Boolean'];
};

export type OperationCollectionResult =
  | NotFoundError
  | OperationCollection
  | PermissionError;

export type OperationDocument = {
  __typename?: 'OperationDocument';
  /** Operation document body */
  body: Scalars['String'];
  /** Operation name */
  name?: Maybe<Scalars['String']>;
};

export type OperationDocumentInput = {
  /** Operation document body */
  body: Scalars['String'];
  /** Operation name */
  name?: InputMaybe<Scalars['String']>;
};

/** Saved headers on a saved operation. */
export type OperationHeader = {
  __typename?: 'OperationHeader';
  /** The header's name. */
  name: Scalars['String'];
  /** The header's value. */
  value: Scalars['String'];
};

export type OperationHeaderInput = {
  /** The header's name. */
  name: Scalars['String'];
  /** The header's value. */
  value: Scalars['String'];
};

export type OperationInfoFilter = {
  __typename?: 'OperationInfoFilter';
  id?: Maybe<Scalars['String']>;
};

export type OperationInfoFilterInput = {
  id?: InputMaybe<Scalars['String']>;
};

/** Operation name filter configuration for a graph. */
export type OperationNameFilter = {
  __typename?: 'OperationNameFilter';
  /** name of the operation by the user and reported alongside metrics */
  name: Scalars['String'];
  version?: Maybe<Scalars['String']>;
};

/** Options to filter by operation name. */
export type OperationNameFilterInput = {
  /** name of the operation set by the user and reported alongside metrics */
  name: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};

export type OperationValidationError = {
  __typename?: 'OperationValidationError';
  message: Scalars['String'];
};

export type OperationsCheckResult = {
  __typename?: 'OperationsCheckResult';
  /** Operations affected by all changes in diff */
  affectedQueries?: Maybe<Array<AffectedQuery>>;
  /** Summary/counts for all changes in diff */
  changeSummary: ChangeSummary;
  /** List of schema changes with associated affected clients and operations */
  changes: Array<Change>;
  /** Indication of the success of the change, either failure, warning, or notice. */
  checkSeverity: ChangeSeverity;
  /** The variant that was used as a base to check against */
  checkedVariant: GraphVariant;
  createdAt: Scalars['Timestamp'];
  /** The threshold that was crossed; null if the threshold was not exceeded */
  crossedOperationThreshold?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  /** Number of affected query operations that are neither marked as SAFE or IGNORED */
  numberOfAffectedOperations: Scalars['Int'];
  /** Number of operations that were validated during schema diff */
  numberOfCheckedOperations: Scalars['Int'];
  workflowTask: OperationsCheckTask;
};

export type OperationsCheckTask = CheckWorkflowTask & {
  __typename?: 'OperationsCheckTask';
  completedAt?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  id: Scalars['ID'];
  /** The result of the check. */
  result?: Maybe<OperationsCheckResult>;
  status: CheckWorkflowTaskStatus;
  targetURL?: Maybe<Scalars['String']>;
  workflow: CheckWorkflow;
};

export enum Ordering {
  Ascending = 'ASCENDING',
  Descending = 'DESCENDING',
}

/** A reusable invite link for an organization. */
export type OrganizationInviteLink = {
  __typename?: 'OrganizationInviteLink';
  createdAt: Scalars['Timestamp'];
  /** A joinToken that can be passed to Mutation.joinAccount to join the organization. */
  joinToken: Scalars['String'];
  /** The role that the user will receive if they join the organization with this link. */
  role: UserPermission;
};

export type OrganizationSso = {
  __typename?: 'OrganizationSSO';
  defaultRole: UserPermission;
  idpid: Scalars['ID'];
  provider: OrganizationSsoProvider;
};

export enum OrganizationSsoProvider {
  Pingone = 'PINGONE',
}

/** PagerDuty notification channel */
export type PagerDutyChannel = Channel & {
  __typename?: 'PagerDutyChannel';
  id: Scalars['ID'];
  name: Scalars['String'];
  routingKey: Scalars['String'];
  subscriptions: Array<ChannelSubscription>;
};

/** PagerDuty notification channel parameters */
export type PagerDutyChannelInput = {
  name?: InputMaybe<Scalars['String']>;
  routingKey: Scalars['String'];
};

/** The schema for a single published subgraph in Studio. */
export type PartialSchema = {
  __typename?: 'PartialSchema';
  /** Timestamp for when the partial schema was created */
  createdAt: Scalars['Timestamp'];
  /** If this sdl is currently actively composed in the gateway, this is true */
  isLive: Scalars['Boolean'];
  /** The subgraph schema document as SDL. */
  sdl: Scalars['String'];
  /** The path of deep storage to find the raw enriched partial schema file */
  sdlPath: Scalars['String'];
};

/**
 * Input for registering a partial schema to an implementing service.
 * One of the fields must be specified (validated server-side).
 *
 * If a new partialSchemaSDL is passed in, this operation will store it before
 * creating the association.
 *
 * If both the sdl and hash are specified, an error will be thrown if the provided
 * hash doesn't match our hash of the sdl contents. If the sdl field is specified,
 * the hash does not need to be and will be computed server-side.
 */
export type PartialSchemaInput = {
  /**
   * Hash of the partial schema to associate; error is thrown if only the hash is
   * specified and the hash has not been seen before
   */
  hash?: InputMaybe<Scalars['String']>;
  /**
   * Contents of the partial schema in SDL syntax, but may reference types
   * that aren't defined in this document
   */
  sdl?: InputMaybe<Scalars['String']>;
};

/** An error that's returned when the current user doesn't have sufficient permissions to perform an action. */
export type PermissionError = Error & {
  __typename?: 'PermissionError';
  /** The error's details. */
  message: Scalars['String'];
};

export type PlanError = {
  __typename?: 'PlanError';
  message: Scalars['String'];
};

export type PromoteSchemaError = {
  __typename?: 'PromoteSchemaError';
  code: PromoteSchemaErrorCode;
  message: Scalars['String'];
};

export enum PromoteSchemaErrorCode {
  CannotPromoteSchemaForFederatedGraph = 'CANNOT_PROMOTE_SCHEMA_FOR_FEDERATED_GRAPH',
}

export type PromoteSchemaResponse = {
  __typename?: 'PromoteSchemaResponse';
  code: PromoteSchemaResponseCode;
  tag: SchemaTag;
};

export enum PromoteSchemaResponseCode {
  NoChangesDetected = 'NO_CHANGES_DETECTED',
  PromotionSuccess = 'PROMOTION_SUCCESS',
}

export type PromoteSchemaResponseOrError =
  | PromoteSchemaError
  | PromoteSchemaResponse;

export type Protobuf = {
  __typename?: 'Protobuf';
  json: Scalars['String'];
  object: Scalars['Object'];
  raw: Scalars['Blob'];
  text: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** Account by ID */
  account?: Maybe<Account>;
  /** Retrieve account by billing provider identifier */
  accountByBillingCode?: Maybe<Account>;
  /** Retrieve account by internal id */
  accountByInternalID?: Maybe<Account>;
  /** Whether an account ID is available for mutation{newAccount(id:)} */
  accountIDAvailable: Scalars['Boolean'];
  /** All accounts */
  allAccounts?: Maybe<Array<Account>>;
  /** All available plans */
  allPlans: Array<BillingPlan>;
  allPublicVariants?: Maybe<Array<GraphVariant>>;
  /** All services */
  allServices?: Maybe<Array<Service>>;
  /** All timezones with their offsets from UTC */
  allTimezoneOffsets: Array<TimezoneOffset>;
  /** All users */
  allUsers?: Maybe<Array<User>>;
  /** Look up a plan by ID */
  billingPlan?: Maybe<BillingPlanV2>;
  /** All available plans */
  billingPlans: Array<BillingPlanV2>;
  /** If this is true, the user is an Apollo administrator who can ignore restrictions based purely on billing plan. */
  canBypassPlanRestrictions: Scalars['Boolean'];
  diffSchemas: Array<Change>;
  /** Get the unsubscribe settings for a given email. */
  emailPreferences?: Maybe<EmailPreferences>;
  experimentalFeatures: GlobalExperimentalFeatures;
  /** Returns the root URL of the Apollo Studio frontend. */
  frontendUrlRoot: Scalars['String'];
  /** Returns details of the graph with the provided ID. */
  graph?: Maybe<Service>;
  internalActiveCronJobs: Array<CronJob>;
  internalAdminUsers?: Maybe<Array<InternalAdminUser>>;
  internalUnresolvedCronExecutionFailures: Array<CronExecution>;
  /** Returns details of the authenticated `User` or `Graph` executing this query. If this is an unauthenticated query (i.e., no API key is provided), this field returns null. */
  me?: Maybe<Identity>;
  odysseyCertification?: Maybe<OdysseyCertification>;
  /** Returns the [operation collection](https://www.apollographql.com/docs/studio/explorer/operation-collections/) for the provided ID. */
  operationCollection: OperationCollectionResult;
  operationCollectionEntries: Array<OperationCollectionEntry>;
  /** Returns details of the Studio organization with the provided ID. */
  organization?: Maybe<Account>;
  /** Look up a plan by ID */
  plan?: Maybe<BillingPlan>;
  /** A list of public variants that have been selected to be shown on our Graph Directory. */
  publiclyListedVariants?: Maybe<Array<GraphVariant>>;
  /** Service by ID */
  service?: Maybe<Service>;
  /** Query statistics across all services. For admins only; normal users must go through AccountsStatsWindow or ServiceStatsWindow. */
  stats: StatsWindow;
  /** Get the studio settings for the current user */
  studioSettings?: Maybe<UserSettings>;
  /** The plan started by AccountMutation.startTeamSubscription */
  teamBillingPlan: BillingPlanV2;
  /** The plan started by AccountMutation.startTeamSubscription */
  teamPlan: BillingPlan;
  /** Schema transformation for the Apollo platform API. Renames types. Internal to Apollo. */
  transformSchemaForPlatformApi?: Maybe<Scalars['GraphQLDocument']>;
  /** The plan started by AccountMutation.startTrial */
  trialBillingPlan: BillingPlanV2;
  /** The plan started by AccountMutation.startTrial */
  trialPlan: BillingPlan;
  /** User by ID */
  user?: Maybe<User>;
  /** Returns details of a Studio graph variant with the provided graph ref. A graph ref has the format `graphID@variantName` (or just `graphID` for the default variant `current`). Returns null if the graph or variant doesn't exist, or if the graph isn't accessible by the current actor. */
  variant?: Maybe<GraphVariantLookup>;
};

export type QueryAccountArgs = {
  id: Scalars['ID'];
};

export type QueryAccountByBillingCodeArgs = {
  id: Scalars['ID'];
};

export type QueryAccountByInternalIdArgs = {
  id: Scalars['ID'];
};

export type QueryAccountIdAvailableArgs = {
  id: Scalars['ID'];
};

export type QueryAllAccountsArgs = {
  search?: InputMaybe<Scalars['String']>;
  tier?: InputMaybe<BillingPlanTier>;
};

export type QueryAllServicesArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type QueryAllUsersArgs = {
  search?: InputMaybe<Scalars['String']>;
};

export type QueryBillingPlanArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryDiffSchemasArgs = {
  baseSchema: Scalars['String'];
  nextSchema: Scalars['String'];
};

export type QueryEmailPreferencesArgs = {
  email: Scalars['String'];
  token: Scalars['String'];
};

export type QueryGraphArgs = {
  id: Scalars['ID'];
};

export type QueryOdysseyCertificationArgs = {
  id: Scalars['ID'];
};

export type QueryOperationCollectionArgs = {
  id: Scalars['ID'];
};

export type QueryOperationCollectionEntriesArgs = {
  collectionEntryIds: Array<Scalars['ID']>;
};

export type QueryOrganizationArgs = {
  id: Scalars['ID'];
};

export type QueryPlanArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type QueryServiceArgs = {
  id: Scalars['ID'];
};

export type QueryStatsArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

export type QueryTeamBillingPlanArgs = {
  billingPeriod: BillingPeriod;
};

export type QueryTeamPlanArgs = {
  billingPeriod: BillingPeriod;
};

export type QueryTransformSchemaForPlatformApiArgs = {
  baseSchema: Scalars['GraphQLDocument'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryVariantArgs = {
  ref: Scalars['ID'];
};

/** query documents to validate against */
export type QueryDocumentInput = {
  document?: InputMaybe<Scalars['String']>;
};

export type QueryPlan = {
  __typename?: 'QueryPlan';
  json: Scalars['String'];
  object: Scalars['Object'];
  text: Scalars['String'];
};

/** Columns of QueryStats. */
export enum QueryStatsColumn {
  AccountId = 'ACCOUNT_ID',
  CachedHistogram = 'CACHED_HISTOGRAM',
  CachedRequestsCount = 'CACHED_REQUESTS_COUNT',
  CacheTtlHistogram = 'CACHE_TTL_HISTOGRAM',
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  ForbiddenOperationCount = 'FORBIDDEN_OPERATION_COUNT',
  FromEngineproxy = 'FROM_ENGINEPROXY',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  RegisteredOperationCount = 'REGISTERED_OPERATION_COUNT',
  RequestsWithErrorsCount = 'REQUESTS_WITH_ERRORS_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  UncachedHistogram = 'UNCACHED_HISTOGRAM',
  UncachedRequestsCount = 'UNCACHED_REQUESTS_COUNT',
}

export type QueryStatsDimensions = {
  __typename?: 'QueryStatsDimensions';
  accountId?: Maybe<Scalars['ID']>;
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fromEngineproxy?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  querySignature?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in QueryStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type QueryStatsFilter = {
  /** Selects rows whose accountId dimension equals the given value if not null. To query for the null value, use {in: {accountId: [null]}} instead. */
  accountId?: InputMaybe<Scalars['ID']>;
  and?: InputMaybe<Array<QueryStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fromEngineproxy dimension equals the given value if not null. To query for the null value, use {in: {fromEngineproxy: [null]}} instead. */
  fromEngineproxy?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<QueryStatsFilterIn>;
  not?: InputMaybe<QueryStatsFilter>;
  or?: InputMaybe<Array<QueryStatsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in QueryStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type QueryStatsFilterIn = {
  /** Selects rows whose accountId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  accountId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fromEngineproxy dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fromEngineproxy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type QueryStatsMetrics = {
  __typename?: 'QueryStatsMetrics';
  cacheTtlHistogram: DurationHistogram;
  cachedHistogram: DurationHistogram;
  cachedRequestsCount: Scalars['Long'];
  forbiddenOperationCount: Scalars['Long'];
  registeredOperationCount: Scalars['Long'];
  requestsWithErrorsCount: Scalars['Long'];
  totalLatencyHistogram: DurationHistogram;
  totalRequestCount: Scalars['Long'];
  uncachedHistogram: DurationHistogram;
  uncachedRequestsCount: Scalars['Long'];
};

export type QueryStatsOrderBySpec = {
  column: QueryStatsColumn;
  direction: Ordering;
};

export type QueryStatsRecord = {
  __typename?: 'QueryStatsRecord';
  /** Dimensions of QueryStats that can be grouped by. */
  groupBy: QueryStatsDimensions;
  /** Metrics of QueryStats that can be aggregated over. */
  metrics: QueryStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Query Trigger */
export type QueryTrigger = ChannelSubscription & {
  __typename?: 'QueryTrigger';
  channels: Array<Channel>;
  comparisonOperator: ComparisonOperator;
  enabled: Scalars['Boolean'];
  excludedOperationNames: Array<Scalars['String']>;
  id: Scalars['ID'];
  metric: QueryTriggerMetric;
  operationNames: Array<Scalars['String']>;
  percentile?: Maybe<Scalars['Float']>;
  scope: QueryTriggerScope;
  serviceId: Scalars['String'];
  state: QueryTriggerState;
  threshold: Scalars['Float'];
  variant?: Maybe<Scalars['String']>;
  window: QueryTriggerWindow;
};

/** Query trigger */
export type QueryTriggerInput = {
  channelIds?: InputMaybe<Array<Scalars['String']>>;
  comparisonOperator: ComparisonOperator;
  enabled?: InputMaybe<Scalars['Boolean']>;
  excludedOperationNames?: InputMaybe<Array<Scalars['String']>>;
  metric: QueryTriggerMetric;
  operationNames?: InputMaybe<Array<Scalars['String']>>;
  percentile?: InputMaybe<Scalars['Float']>;
  scope?: InputMaybe<QueryTriggerScope>;
  threshold: Scalars['Float'];
  variant?: InputMaybe<Scalars['String']>;
  window: QueryTriggerWindow;
};

export enum QueryTriggerMetric {
  /** Number of requests within the window that resulted in an error. Ignores `percentile`. */
  ErrorCount = 'ERROR_COUNT',
  /** Number of error requests divided by total number of requests. Ignores `percentile`. */
  ErrorPercentage = 'ERROR_PERCENTAGE',
  /** Number of requests within the window. Ignores `percentile`. */
  RequestCount = 'REQUEST_COUNT',
  /** Request latency in ms. Requires `percentile`. */
  RequestServiceTime = 'REQUEST_SERVICE_TIME',
}

export enum QueryTriggerScope {
  All = 'ALL',
  Any = 'ANY',
  Unrecognized = 'UNRECOGNIZED',
}

/** Query trigger state */
export type QueryTriggerState = {
  __typename?: 'QueryTriggerState';
  evaluatedAt: Scalars['Timestamp'];
  lastTriggeredAt?: Maybe<Scalars['Timestamp']>;
  operations: Array<QueryTriggerStateOperation>;
  triggered: Scalars['Boolean'];
};

export type QueryTriggerStateOperation = {
  __typename?: 'QueryTriggerStateOperation';
  count: Scalars['Long'];
  operation: Scalars['String'];
  triggered: Scalars['Boolean'];
  value: Scalars['Float'];
};

export enum QueryTriggerWindow {
  FifteenMinutes = 'FIFTEEN_MINUTES',
  FiveMinutes = 'FIVE_MINUTES',
  OneMinute = 'ONE_MINUTE',
  Unrecognized = 'UNRECOGNIZED',
}

/** The README documentation for a graph variant, which is displayed in Studio. */
export type Readme = {
  __typename?: 'Readme';
  /** The contents of the README in plaintext. */
  content: Scalars['String'];
  /** The README's unique ID. `a15177c0-b003-4837-952a-dbfe76062eb1` for the default README */
  id: Scalars['ID'];
  /**
   * The timestamp when the README was most recently updated. `1970-01-01T00:00:00Z` for the default README
   * @deprecated Deprecated in favour of lastUpdatedTime
   */
  lastUpdatedAt: Scalars['Timestamp'];
  /** The actor that most recently updated the README (usually a `User`). `null` for the default README, or if the `User` was deleted. */
  lastUpdatedBy?: Maybe<Identity>;
  /** The timestamp when the README was most recently updated. `null` for the default README */
  lastUpdatedTime?: Maybe<Scalars['Timestamp']>;
};

export type RegisterOperationsMutationResponse = {
  __typename?: 'RegisterOperationsMutationResponse';
  invalidOperations?: Maybe<Array<InvalidOperation>>;
  newOperations?: Maybe<Array<RegisteredOperation>>;
  registrationSuccess: Scalars['Boolean'];
};

export type RegisteredClientIdentityInput = {
  identifier: Scalars['String'];
  name: Scalars['String'];
  version?: InputMaybe<Scalars['String']>;
};

export type RegisteredOperation = {
  __typename?: 'RegisteredOperation';
  signature: Scalars['ID'];
};

export type RegisteredOperationInput = {
  document?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<RegisteredOperationMetadataInput>;
  signature: Scalars['ID'];
};

export type RegisteredOperationMetadataInput = {
  /** This will be used to link existing records in Engine to a new ID. */
  engineSignature?: InputMaybe<Scalars['String']>;
};

export type RegistryApiKey = {
  __typename?: 'RegistryApiKey';
  keyName?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type RegistryStatsWindow = {
  __typename?: 'RegistryStatsWindow';
  schemaCheckStats: Array<AccountChecksStatsRecord>;
  schemaPublishStats: Array<AccountPublishesStatsRecord>;
};

export type RegistrySubscription = ChannelSubscription & {
  __typename?: 'RegistrySubscription';
  channel?: Maybe<Channel>;
  /** @deprecated Use channels list instead */
  channels: Array<Channel>;
  createdAt: Scalars['Timestamp'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  lastUpdatedAt: Scalars['Timestamp'];
  options: SubscriptionOptions;
  variant?: Maybe<Scalars['String']>;
};

export type RelaunchComplete = {
  __typename?: 'RelaunchComplete';
  latestLaunch: Launch;
  updated: Scalars['Boolean'];
};

export type RelaunchError = {
  __typename?: 'RelaunchError';
  message: Scalars['String'];
};

export type RelaunchResult = RelaunchComplete | RelaunchError;

export type RemoveOperationCollectionEntryResult =
  | OperationCollection
  | PermissionError;

export type RemoveOperationCollectionFromVariantResult =
  | GraphVariant
  | NotFoundError
  | PermissionError
  | ValidationError;

export type ReorderOperationCollectionResult =
  | OperationCollection
  | PermissionError;

export type ReportSchemaError = ReportSchemaResult & {
  __typename?: 'ReportSchemaError';
  code: ReportSchemaErrorCode;
  inSeconds: Scalars['Int'];
  message: Scalars['String'];
  withCoreSchema: Scalars['Boolean'];
};

export enum ReportSchemaErrorCode {
  BootIdIsNotValidUuid = 'BOOT_ID_IS_NOT_VALID_UUID',
  BootIdIsRequired = 'BOOT_ID_IS_REQUIRED',
  CoreSchemaHashIsNotSchemaSha256 = 'CORE_SCHEMA_HASH_IS_NOT_SCHEMA_SHA256',
  CoreSchemaHashIsRequired = 'CORE_SCHEMA_HASH_IS_REQUIRED',
  CoreSchemaHashIsTooLong = 'CORE_SCHEMA_HASH_IS_TOO_LONG',
  ExecutableSchemaIdIsNotSchemaSha256 = 'EXECUTABLE_SCHEMA_ID_IS_NOT_SCHEMA_SHA256',
  ExecutableSchemaIdIsRequired = 'EXECUTABLE_SCHEMA_ID_IS_REQUIRED',
  ExecutableSchemaIdIsTooLong = 'EXECUTABLE_SCHEMA_ID_IS_TOO_LONG',
  GraphRefInvalidFormat = 'GRAPH_REF_INVALID_FORMAT',
  GraphRefIsRequired = 'GRAPH_REF_IS_REQUIRED',
  GraphVariantDoesNotMatchRegex = 'GRAPH_VARIANT_DOES_NOT_MATCH_REGEX',
  GraphVariantIsRequired = 'GRAPH_VARIANT_IS_REQUIRED',
  LibraryVersionIsTooLong = 'LIBRARY_VERSION_IS_TOO_LONG',
  PlatformIsTooLong = 'PLATFORM_IS_TOO_LONG',
  RuntimeVersionIsTooLong = 'RUNTIME_VERSION_IS_TOO_LONG',
  SchemaIsNotParsable = 'SCHEMA_IS_NOT_PARSABLE',
  SchemaIsNotValid = 'SCHEMA_IS_NOT_VALID',
  ServerIdIsTooLong = 'SERVER_ID_IS_TOO_LONG',
  UserVersionIsTooLong = 'USER_VERSION_IS_TOO_LONG',
}

export type ReportSchemaResponse = ReportSchemaResult & {
  __typename?: 'ReportSchemaResponse';
  inSeconds: Scalars['Int'];
  withCoreSchema: Scalars['Boolean'];
};

export type ReportSchemaResult = {
  inSeconds: Scalars['Int'];
  withCoreSchema: Scalars['Boolean'];
};

export type ReportServerInfoError = ReportServerInfoResult & {
  __typename?: 'ReportServerInfoError';
  code: ReportSchemaErrorCode;
  inSeconds: Scalars['Int'];
  message: Scalars['String'];
  withExecutableSchema: Scalars['Boolean'];
};

export type ReportServerInfoResponse = ReportServerInfoResult & {
  __typename?: 'ReportServerInfoResponse';
  inSeconds: Scalars['Int'];
  withExecutableSchema: Scalars['Boolean'];
};

export type ReportServerInfoResult = {
  inSeconds: Scalars['Int'];
  withExecutableSchema: Scalars['Boolean'];
};

export enum Resolution {
  R1D = 'R1D',
  R1H = 'R1H',
  R1M = 'R1M',
  R5M = 'R5M',
  R6H = 'R6H',
  R15M = 'R15M',
}

export enum ResponseHints {
  None = 'NONE',
  SampleResponses = 'SAMPLE_RESPONSES',
  Subgraphs = 'SUBGRAPHS',
  Timings = 'TIMINGS',
  TraceTimings = 'TRACE_TIMINGS',
}

export type RoleOverride = {
  __typename?: 'RoleOverride';
  graph: Service;
  lastUpdatedAt: Scalars['Timestamp'];
  role: UserPermission;
  user: User;
};

export type RoverArgumentInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['Object']>;
};

export type ScheduledSummary = ChannelSubscription & {
  __typename?: 'ScheduledSummary';
  /** @deprecated Use channels list instead */
  channel?: Maybe<Channel>;
  channels: Array<Channel>;
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  timezone: Scalars['String'];
  variant: Scalars['String'];
};

/** A GraphQL schema document and associated metadata. */
export type Schema = {
  __typename?: 'Schema';
  createTemporaryURL?: Maybe<TemporaryUrl>;
  /** The timestamp of initial ingestion of a schema to a graph. */
  createdAt: Scalars['Timestamp'];
  /** The GraphQL schema document. */
  document: Scalars['GraphQLDocument'];
  /** The number of fields; this includes user defined fields only, excluding built-in types and fields */
  fieldCount: Scalars['Int'];
  gitContext?: Maybe<GitContext>;
  /** The GraphQL schema document's SHA256 hash, represented as a hexadecimal string. */
  hash: Scalars['ID'];
  introspection: IntrospectionSchema;
  /** The number of types; this includes user defined types only, excluding built-in types */
  typeCount: Scalars['Int'];
};

/** A GraphQL schema document and associated metadata. */
export type SchemaCreateTemporaryUrlArgs = {
  expiresInSeconds?: Scalars['Int'];
};

/** An error that occurred while running schema composition on a set of subgraph schemas. */
export type SchemaCompositionError = {
  __typename?: 'SchemaCompositionError';
  /** A machine-readable error code. */
  code?: Maybe<Scalars['String']>;
  /** Source locations related to the error. */
  locations: Array<Maybe<SourceLocation>>;
  /** A human-readable message describing the error. */
  message: Scalars['String'];
};

/** The result of computing the difference between two schemas, usually as part of schema checks. */
export type SchemaDiff = {
  __typename?: 'SchemaDiff';
  /**
   * Clients affected by all changes in the diff.
   * @deprecated Unsupported.
   */
  affectedClients?: Maybe<Array<AffectedClient>>;
  /** Operations affected by all changes in the diff. */
  affectedQueries?: Maybe<Array<AffectedQuery>>;
  /** Numeric summaries for each type of change in the diff. */
  changeSummary: ChangeSummary;
  /** A list of all schema changes in the diff, including their severity. */
  changes: Array<Change>;
  /** The number of GraphQL operations affected by the diff's changes that are neither marked as safe nor ignored. */
  numberOfAffectedOperations: Scalars['Int'];
  /** The number of GraphQL operations that were validated during the check. */
  numberOfCheckedOperations?: Maybe<Scalars['Int']>;
  /** Indicates the overall safety of the changes included in the diff, based on operation history (e.g., `FAILURE` or `NOTICE`). */
  severity: ChangeSeverity;
  /** The tag against which this diff was created */
  tag?: Maybe<Scalars['String']>;
  /** @deprecated use severity instead */
  type: ChangeType;
  /** Configuration of validation */
  validationConfig?: Maybe<SchemaDiffValidationConfig>;
};

export type SchemaDiffValidationConfig = {
  __typename?: 'SchemaDiffValidationConfig';
  /** Clients to ignore during validation. */
  excludedClients?: Maybe<Array<ClientInfoFilterOutput>>;
  /** Operation names to ignore during validation. */
  excludedOperationNames?: Maybe<Array<Maybe<OperationNameFilter>>>;
  /**
   * delta in seconds from current time that determines the start of the window
   * for reported metrics included in a schema diff. A day window from the present
   * day would have a `from` value of -86400. In rare cases, this could be an ISO
   * timestamp if the user passed one in on diff creation
   */
  from?: Maybe<Scalars['Timestamp']>;
  /** Operation IDs to ignore during validation. */
  ignoredOperations?: Maybe<Array<Scalars['ID']>>;
  /** Variants to include during validation. */
  includedVariants?: Maybe<Array<Scalars['String']>>;
  /** Minimum number of requests within the window for a query to be considered. */
  queryCountThreshold?: Maybe<Scalars['Int']>;
  /**
   * Number of requests within the window for a query to be considered, relative to
   * total request count. Expected values are between 0 and 0.05 (minimum 5% of
   * total request volume)
   */
  queryCountThresholdPercentage?: Maybe<Scalars['Float']>;
  /**
   * delta in seconds from current time that determines the end of the
   * window for reported metrics included in a schema diff. A day window
   * from the present day would have a `to` value of -0. In rare
   * cases, this could be an ISO timestamp if the user passed one in on diff
   * creation
   */
  to?: Maybe<Scalars['Timestamp']>;
};

export type SchemaPublishSubscription = ChannelSubscription & {
  __typename?: 'SchemaPublishSubscription';
  channels: Array<Channel>;
  createdAt: Scalars['Timestamp'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  lastUpdatedAt: Scalars['Timestamp'];
  variant?: Maybe<Scalars['String']>;
};

export type SchemaReport = {
  /** A randomly generated UUID, immutable for the lifetime of the edge server runtime. */
  bootId: Scalars['String'];
  /** The hex SHA256 hash of the schema being reported. Note that for a GraphQL server with a core schema, this should be the core schema, not the API schema. */
  coreSchemaHash: Scalars['String'];
  /** The graph ref (eg, 'id@variant') */
  graphRef: Scalars['String'];
  /** The version of the edge server reporting agent, e.g. apollo-server-2.8, graphql-java-3.1, etc. length must be <= 256 characters. */
  libraryVersion?: InputMaybe<Scalars['String']>;
  /** The infra environment in which this edge server is running, e.g. localhost, Kubernetes, AWS Lambda, Google CloudRun, AWS ECS, etc. length must be <= 256 characters. */
  platform?: InputMaybe<Scalars['String']>;
  /** The runtime in which the edge server is running, e.g. node 12.03, zulu8.46.0.19-ca-jdk8.0.252-macosx_x64, etc. length must be <= 256 characters. */
  runtimeVersion?: InputMaybe<Scalars['String']>;
  /** If available, an identifier for the edge server instance, such that when restarting this instance it will have the same serverId, with a different bootId. For example, in Kubernetes this might be the pod name. Length must be <= 256 characters. */
  serverId?: InputMaybe<Scalars['String']>;
  /** An identifier used to distinguish the version (from the user's perspective) of the edge server's code itself. For instance, the git sha of the server's repository or the docker sha of the associated image this server runs with. Length must be <= 256 characters. */
  userVersion?: InputMaybe<Scalars['String']>;
};

/** Contains details for an individual publication of an individual graph variant. */
export type SchemaTag = {
  __typename?: 'SchemaTag';
  /** The result of federated composition executed for this publication. This result includes either a supergraph schema or error details, depending on whether composition succeeded. This value is null when the publication is for a non-federated graph. */
  compositionResult?: Maybe<CompositionResult>;
  createdAt: Scalars['Timestamp'];
  /** A schema diff comparing against the schema from the most recent previous successful publication. */
  diffToPrevious?: Maybe<SchemaDiff>;
  gitContext?: Maybe<GitContext>;
  /**
   * List of previously uploaded SchemaTags under the same tag name, starting with
   * the selected published schema record. Sorted in reverse chronological order
   * by creation date (newest publish first).
   *
   * Note: This does not include the history of checked schemas
   */
  history: Array<SchemaTag>;
  /**
   * Number of tagged schemas created under the same tag name.
   * Also represents the maximum size of the history's limit argument.
   */
  historyLength: Scalars['Int'];
  /**
   * Number of schemas tagged prior to this one under the same tag name, its position
   * in the tag history.
   */
  historyOrder: Scalars['Int'];
  /** The identifier for this specific publication. */
  id: Scalars['ID'];
  /** The timestamp when the variant was published to. */
  publishedAt: Scalars['Timestamp'];
  /**
   * The Identity that published this schema and their client info, or null if this isn't
   * a publish. Sub-fields may be null if they weren't recorded.
   */
  publishedBy?: Maybe<IdentityAndClientInfo>;
  /**
   * Indicates the schemaTag of the schema's original upload, null if this is the
   * first upload of the schema.
   */
  reversionFrom?: Maybe<SchemaTag>;
  /** The schema that was published to the variant. */
  schema: Schema;
  slackNotificationBody?: Maybe<Scalars['String']>;
  /** @deprecated Please use variant { name } instead */
  tag: Scalars['String'];
  /** The variant that was published to." */
  variant: GraphVariant;
  webhookNotificationBody: Scalars['String'];
};

/** Contains details for an individual publication of an individual graph variant. */
export type SchemaTagHistoryArgs = {
  includeUnchanged?: Scalars['Boolean'];
  limit?: Scalars['Int'];
  offset?: InputMaybe<Scalars['Int']>;
};

/** Contains details for an individual publication of an individual graph variant. */
export type SchemaTagSlackNotificationBodyArgs = {
  graphDisplayName: Scalars['String'];
};

/** How many seats of the given types does an organization have (regardless of plan type)? */
export type Seats = {
  __typename?: 'Seats';
  /** How many members that are free in this organization. */
  free: Scalars['Int'];
  /** How many members that are not free in this organization. */
  fullPrice: Scalars['Int'];
};

export type SemanticChange = {
  __typename?: 'SemanticChange';
  /** Target arg of change made. */
  argNode?: Maybe<NamedIntrospectionArg>;
  /**
   * Node related to the top level node that was changed, such as a field in an object,
   * a value in an enum or the object of an interface
   */
  childNode?: Maybe<NamedIntrospectionValue>;
  /** Semantic metadata about the type of change */
  definition: ChangeDefinition;
  /** Top level node affected by the change */
  parentNode?: Maybe<NamedIntrospectionType>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type Service = Identity & {
  __typename?: 'Service';
  /** Organization that this graph belongs to. */
  account?: Maybe<Account>;
  accountId?: Maybe<Scalars['ID']>;
  apiKeys?: Maybe<Array<GraphApiKey>>;
  /** A view of the identity as an Actor type. */
  asActor: Actor;
  /**
   * Get an URL to which an avatar image can be uploaded. Client uploads by sending a PUT request
   * with the image data to MediaUploadInfo.url. Client SHOULD set the "Content-Type" header to the
   * browser-inferred MIME type, and SHOULD set the "x-apollo-content-filename" header to the
   * filename, if such information is available. Client MUST set the "x-apollo-csrf-token" header to
   * MediaUploadInfo.csrfToken.
   */
  avatarUpload?: Maybe<AvatarUploadResult>;
  /**
   * Get an image URL for the service's avatar. Note that CORS is not enabled for these URLs. The size
   * argument is used for bandwidth reduction, and should be the size of the image as displayed in the
   * application. Apollo's media server will downscale larger images to at least the requested size,
   * but this will not happen for third-party media servers.
   */
  avatarUrl?: Maybe<Scalars['String']>;
  /** Get available notification endpoints */
  channels?: Maybe<Array<Channel>>;
  /** Get check configuration for this graph. */
  checkConfiguration?: Maybe<CheckConfiguration>;
  /** Get a check workflow for this graph by its ID */
  checkWorkflow?: Maybe<CheckWorkflow>;
  /** Get check workflows for this graph ordered by creation time, most recent first. */
  checkWorkflows: Array<CheckWorkflow>;
  /**
   * List of options available for filtering checks for this graph by author.
   * If a filter is passed, constrains results to match the filter.
   */
  checksAuthorOptions: Array<Scalars['String']>;
  /**
   * List of options available for filtering checks for this graph by branch.
   * If a filter is passed, constrains results to match the filter.
   */
  checksBranchOptions: Array<Scalars['String']>;
  /**
   * List of options available for filtering checks for this graph by subgraph name.
   * If a filter is passed, constrains results to match the filter.
   */
  checksSubgraphOptions: Array<Scalars['String']>;
  /** Given a graphCompositionID, return the results of composition. This can represent either a validation or a publish. */
  compositionResultById?: Maybe<CompositionResult>;
  createdAt: Scalars['Timestamp'];
  createdBy?: Maybe<Identity>;
  datadogMetricsConfig?: Maybe<DatadogMetricsConfig>;
  defaultBuildPipelineTrack?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  devGraphOwner?: Maybe<User>;
  /** Get a GraphQL document by hash */
  document?: Maybe<Scalars['GraphQLDocument']>;
  /**
   * When this is true, this graph will be hidden from non-admin members of the org who haven't been explicitly assigned a
   * role on this graph.
   */
  hiddenFromUninvitedNonAdminAccountMembers: Scalars['Boolean'];
  /** Globally unique identifier for this graph. */
  id: Scalars['ID'];
  /**
   * List of subgraphs that comprise a graph. A non-federated graph should have a single implementing service.
   * Set includeDeleted to see deleted subgraphs.
   */
  implementingServices?: Maybe<GraphImplementors>;
  lastReportedAt?: Maybe<Scalars['Timestamp']>;
  /** Current identity, null if not authenticated. */
  me?: Maybe<Identity>;
  /** The composition result that was most recently published to a graph variant. */
  mostRecentCompositionPublish?: Maybe<CompositionPublishResult>;
  /** Permissions of the current user in this graph. */
  myRole?: Maybe<UserPermission>;
  /**
   * Name of this graph. Note that this field is deprecated.
   * @deprecated Use Service.title
   */
  name: Scalars['String'];
  onboardingArchitecture?: Maybe<OnboardingArchitecture>;
  operation?: Maybe<Operation>;
  /** Gets the operations and their approved changes for this graph, checkID, and operationID. */
  operationsAcceptedChanges: Array<OperationAcceptedChange>;
  /** Get an operations check result for a specific check ID */
  operationsCheck?: Maybe<OperationsCheckResult>;
  /** Get query triggers for a given variant. If variant is null all the triggers for this service will be gotten. */
  queryTriggers?: Maybe<Array<QueryTrigger>>;
  readme?: Maybe<Readme>;
  /** Registry specific stats for this graph. */
  registryStatsWindow?: Maybe<RegistryStatsWindow>;
  /**
   * Whether registry subscriptions (with any options) are enabled. If variant is not passed, returns true if configuration is present for any variant
   * @deprecated This field will be removed
   */
  registrySubscriptionsEnabled: Scalars['Boolean'];
  reportingEnabled: Scalars['Boolean'];
  /** The list of members that can access this graph, accounting for graph role overrides */
  roleOverrides?: Maybe<Array<RoleOverride>>;
  /** Which permissions the current user has for interacting with this graph */
  roles?: Maybe<ServiceRoles>;
  scheduledSummaries: Array<ScheduledSummary>;
  /** Get a schema by hash or current tag */
  schema?: Maybe<Schema>;
  /** The current publish associated to a given variant (with 'tag' as the variant name). */
  schemaTag?: Maybe<SchemaTag>;
  schemaTagById?: Maybe<SchemaTag>;
  /**
   * Get schema tags, with optional filtering to a set of tags. Always sorted by creation
   * date in reverse chronological order.
   */
  schemaTags?: Maybe<Array<SchemaTag>>;
  /** @deprecated use Service.statsWindow instead */
  stats: ServiceStatsWindow;
  statsWindow?: Maybe<ServiceStatsWindow>;
  /** Generate a test schema publish notification body */
  testSchemaPublishBody: Scalars['String'];
  /** Name of this graph. */
  title: Scalars['String'];
  trace?: Maybe<Trace>;
  traceStorageEnabled: Scalars['Boolean'];
  /**
   * A particular variant often representing a live traffic environment (such as "dev", "staging", or "prod").
   * Each variant can represent a specific URL or destination to query at, analytics, and its own schema history.
   * Pass in a name to get a specific variant. Use `Graph.variants` to get a list of variants.
   */
  variant?: Maybe<GraphVariant>;
  /** The list of variants that exist for this graph */
  variants: Array<GraphVariant>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceAvatarUrlArgs = {
  size?: Scalars['Int'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceChannelsArgs = {
  channelIds?: InputMaybe<Array<Scalars['ID']>>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceCheckWorkflowArgs = {
  id: Scalars['ID'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceCheckWorkflowsArgs = {
  filter?: InputMaybe<CheckFilterInput>;
  limit?: Scalars['Int'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceChecksAuthorOptionsArgs = {
  filter?: InputMaybe<CheckFilterInput>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceChecksBranchOptionsArgs = {
  filter?: InputMaybe<CheckFilterInput>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceChecksSubgraphOptionsArgs = {
  filter?: InputMaybe<CheckFilterInput>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceCompositionResultByIdArgs = {
  id: Scalars['ID'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceDocumentArgs = {
  hash?: InputMaybe<Scalars['SHA256']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceImplementingServicesArgs = {
  graphVariant: Scalars['String'];
  includeDeleted?: InputMaybe<Scalars['Boolean']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceLastReportedAtArgs = {
  graphVariant?: InputMaybe<Scalars['String']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceMostRecentCompositionPublishArgs = {
  graphVariant: Scalars['String'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceOperationArgs = {
  id: Scalars['ID'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceOperationsAcceptedChangesArgs = {
  checkID: Scalars['ID'];
  operationID: Scalars['String'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceOperationsCheckArgs = {
  checkID: Scalars['ID'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceQueryTriggersArgs = {
  graphVariant?: InputMaybe<Scalars['String']>;
  operationNames?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceRegistryStatsWindowArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceRegistrySubscriptionsEnabledArgs = {
  graphVariant?: InputMaybe<Scalars['String']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceSchemaArgs = {
  hash?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Scalars['String']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceSchemaTagArgs = {
  tag: Scalars['String'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceSchemaTagByIdArgs = {
  id: Scalars['ID'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceSchemaTagsArgs = {
  tags?: InputMaybe<Array<Scalars['String']>>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceStatsArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceStatsWindowArgs = {
  from: Scalars['Timestamp'];
  resolution?: InputMaybe<Resolution>;
  to?: InputMaybe<Scalars['Timestamp']>;
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceTestSchemaPublishBodyArgs = {
  variant: Scalars['String'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceTraceArgs = {
  id: Scalars['ID'];
};

/**
 * A graph in Apollo Studio represents a graph in your organization.
 * Each graph has one or more variants, which correspond to the different environments where that graph runs (such as staging and production).
 * Each variant has its own GraphQL schema, which means schemas can differ between environments.
 */
export type ServiceVariantArgs = {
  name: Scalars['String'];
};

/** Columns of ServiceBillingUsageStats. */
export enum ServiceBillingUsageStatsColumn {
  AgentVersion = 'AGENT_VERSION',
  OperationCount = 'OPERATION_COUNT',
  OperationCountProvidedExplicitly = 'OPERATION_COUNT_PROVIDED_EXPLICITLY',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
}

export type ServiceBillingUsageStatsDimensions = {
  __typename?: 'ServiceBillingUsageStatsDimensions';
  agentVersion?: Maybe<Scalars['String']>;
  operationCountProvidedExplicitly?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceBillingUsageStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceBillingUsageStatsFilter = {
  /** Selects rows whose agentVersion dimension equals the given value if not null. To query for the null value, use {in: {agentVersion: [null]}} instead. */
  agentVersion?: InputMaybe<Scalars['String']>;
  and?: InputMaybe<Array<ServiceBillingUsageStatsFilter>>;
  in?: InputMaybe<ServiceBillingUsageStatsFilterIn>;
  not?: InputMaybe<ServiceBillingUsageStatsFilter>;
  /** Selects rows whose operationCountProvidedExplicitly dimension equals the given value if not null. To query for the null value, use {in: {operationCountProvidedExplicitly: [null]}} instead. */
  operationCountProvidedExplicitly?: InputMaybe<Scalars['String']>;
  or?: InputMaybe<Array<ServiceBillingUsageStatsFilter>>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceBillingUsageStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceBillingUsageStatsFilterIn = {
  /** Selects rows whose agentVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  agentVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose operationCountProvidedExplicitly dimension is in the given list. A null value in the list means a row with null for that dimension. */
  operationCountProvidedExplicitly?: InputMaybe<
    Array<InputMaybe<Scalars['String']>>
  >;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceBillingUsageStatsMetrics = {
  __typename?: 'ServiceBillingUsageStatsMetrics';
  operationCount: Scalars['Long'];
};

export type ServiceBillingUsageStatsOrderBySpec = {
  column: ServiceBillingUsageStatsColumn;
  direction: Ordering;
};

export type ServiceBillingUsageStatsRecord = {
  __typename?: 'ServiceBillingUsageStatsRecord';
  /** Dimensions of ServiceBillingUsageStats that can be grouped by. */
  groupBy: ServiceBillingUsageStatsDimensions;
  /** Metrics of ServiceBillingUsageStats that can be aggregated over. */
  metrics: ServiceBillingUsageStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceEdgeServerInfos. */
export enum ServiceEdgeServerInfosColumn {
  BootId = 'BOOT_ID',
  ExecutableSchemaId = 'EXECUTABLE_SCHEMA_ID',
  LibraryVersion = 'LIBRARY_VERSION',
  Platform = 'PLATFORM',
  RuntimeVersion = 'RUNTIME_VERSION',
  SchemaTag = 'SCHEMA_TAG',
  ServerId = 'SERVER_ID',
  Timestamp = 'TIMESTAMP',
  UserVersion = 'USER_VERSION',
}

export type ServiceEdgeServerInfosDimensions = {
  __typename?: 'ServiceEdgeServerInfosDimensions';
  bootId?: Maybe<Scalars['ID']>;
  executableSchemaId?: Maybe<Scalars['ID']>;
  libraryVersion?: Maybe<Scalars['String']>;
  platform?: Maybe<Scalars['String']>;
  runtimeVersion?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serverId?: Maybe<Scalars['ID']>;
  userVersion?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceEdgeServerInfos. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceEdgeServerInfosFilter = {
  and?: InputMaybe<Array<ServiceEdgeServerInfosFilter>>;
  /** Selects rows whose bootId dimension equals the given value if not null. To query for the null value, use {in: {bootId: [null]}} instead. */
  bootId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose executableSchemaId dimension equals the given value if not null. To query for the null value, use {in: {executableSchemaId: [null]}} instead. */
  executableSchemaId?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<ServiceEdgeServerInfosFilterIn>;
  /** Selects rows whose libraryVersion dimension equals the given value if not null. To query for the null value, use {in: {libraryVersion: [null]}} instead. */
  libraryVersion?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<ServiceEdgeServerInfosFilter>;
  or?: InputMaybe<Array<ServiceEdgeServerInfosFilter>>;
  /** Selects rows whose platform dimension equals the given value if not null. To query for the null value, use {in: {platform: [null]}} instead. */
  platform?: InputMaybe<Scalars['String']>;
  /** Selects rows whose runtimeVersion dimension equals the given value if not null. To query for the null value, use {in: {runtimeVersion: [null]}} instead. */
  runtimeVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serverId dimension equals the given value if not null. To query for the null value, use {in: {serverId: [null]}} instead. */
  serverId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose userVersion dimension equals the given value if not null. To query for the null value, use {in: {userVersion: [null]}} instead. */
  userVersion?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceEdgeServerInfos. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceEdgeServerInfosFilterIn = {
  /** Selects rows whose bootId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  bootId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose executableSchemaId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  executableSchemaId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose libraryVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  libraryVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose platform dimension is in the given list. A null value in the list means a row with null for that dimension. */
  platform?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose runtimeVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  runtimeVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serverId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serverId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose userVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  userVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceEdgeServerInfosOrderBySpec = {
  column: ServiceEdgeServerInfosColumn;
  direction: Ordering;
};

export type ServiceEdgeServerInfosRecord = {
  __typename?: 'ServiceEdgeServerInfosRecord';
  /** Dimensions of ServiceEdgeServerInfos that can be grouped by. */
  groupBy: ServiceEdgeServerInfosDimensions;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceErrorStats. */
export enum ServiceErrorStatsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  ErrorsCount = 'ERRORS_COUNT',
  Path = 'PATH',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  RequestsWithErrorsCount = 'REQUESTS_WITH_ERRORS_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
}

export type ServiceErrorStatsDimensions = {
  __typename?: 'ServiceErrorStatsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceErrorStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceErrorStatsFilter = {
  and?: InputMaybe<Array<ServiceErrorStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceErrorStatsFilterIn>;
  not?: InputMaybe<ServiceErrorStatsFilter>;
  or?: InputMaybe<Array<ServiceErrorStatsFilter>>;
  /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
  path?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceErrorStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceErrorStatsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceErrorStatsMetrics = {
  __typename?: 'ServiceErrorStatsMetrics';
  errorsCount: Scalars['Long'];
  requestsWithErrorsCount: Scalars['Long'];
};

export type ServiceErrorStatsOrderBySpec = {
  column: ServiceErrorStatsColumn;
  direction: Ordering;
};

export type ServiceErrorStatsRecord = {
  __typename?: 'ServiceErrorStatsRecord';
  /** Dimensions of ServiceErrorStats that can be grouped by. */
  groupBy: ServiceErrorStatsDimensions;
  /** Metrics of ServiceErrorStats that can be aggregated over. */
  metrics: ServiceErrorStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceFieldExecutions. */
export enum ServiceFieldExecutionsColumn {
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ObservedExecutionCount = 'OBSERVED_EXECUTION_COUNT',
  ParentType = 'PARENT_TYPE',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
}

export type ServiceFieldExecutionsDimensions = {
  __typename?: 'ServiceFieldExecutionsDimensions';
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldExecutions. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceFieldExecutionsFilter = {
  and?: InputMaybe<Array<ServiceFieldExecutionsFilter>>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceFieldExecutionsFilterIn>;
  not?: InputMaybe<ServiceFieldExecutionsFilter>;
  or?: InputMaybe<Array<ServiceFieldExecutionsFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldExecutions. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceFieldExecutionsFilterIn = {
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceFieldExecutionsMetrics = {
  __typename?: 'ServiceFieldExecutionsMetrics';
  estimatedExecutionCount: Scalars['Long'];
  observedExecutionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type ServiceFieldExecutionsOrderBySpec = {
  column: ServiceFieldExecutionsColumn;
  direction: Ordering;
};

export type ServiceFieldExecutionsRecord = {
  __typename?: 'ServiceFieldExecutionsRecord';
  /** Dimensions of ServiceFieldExecutions that can be grouped by. */
  groupBy: ServiceFieldExecutionsDimensions;
  /** Metrics of ServiceFieldExecutions that can be aggregated over. */
  metrics: ServiceFieldExecutionsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceFieldLatencies. */
export enum ServiceFieldLatenciesColumn {
  FieldHistogram = 'FIELD_HISTOGRAM',
  FieldName = 'FIELD_NAME',
  ParentType = 'PARENT_TYPE',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
}

export type ServiceFieldLatenciesDimensions = {
  __typename?: 'ServiceFieldLatenciesDimensions';
  field?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldLatencies. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceFieldLatenciesFilter = {
  and?: InputMaybe<Array<ServiceFieldLatenciesFilter>>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceFieldLatenciesFilterIn>;
  not?: InputMaybe<ServiceFieldLatenciesFilter>;
  or?: InputMaybe<Array<ServiceFieldLatenciesFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldLatencies. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceFieldLatenciesFilterIn = {
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceFieldLatenciesMetrics = {
  __typename?: 'ServiceFieldLatenciesMetrics';
  fieldHistogram: DurationHistogram;
};

export type ServiceFieldLatenciesOrderBySpec = {
  column: ServiceFieldLatenciesColumn;
  direction: Ordering;
};

export type ServiceFieldLatenciesRecord = {
  __typename?: 'ServiceFieldLatenciesRecord';
  /** Dimensions of ServiceFieldLatencies that can be grouped by. */
  groupBy: ServiceFieldLatenciesDimensions;
  /** Metrics of ServiceFieldLatencies that can be aggregated over. */
  metrics: ServiceFieldLatenciesMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceFieldRequestsByClientVersion. */
export enum ServiceFieldRequestsByClientVersionColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ObservedExecutionCount = 'OBSERVED_EXECUTION_COUNT',
  ParentType = 'PARENT_TYPE',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
}

export type ServiceFieldRequestsByClientVersionDimensions = {
  __typename?: 'ServiceFieldRequestsByClientVersionDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldRequestsByClientVersion. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceFieldRequestsByClientVersionFilter = {
  and?: InputMaybe<Array<ServiceFieldRequestsByClientVersionFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceFieldRequestsByClientVersionFilterIn>;
  not?: InputMaybe<ServiceFieldRequestsByClientVersionFilter>;
  or?: InputMaybe<Array<ServiceFieldRequestsByClientVersionFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldRequestsByClientVersion. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceFieldRequestsByClientVersionFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceFieldRequestsByClientVersionMetrics = {
  __typename?: 'ServiceFieldRequestsByClientVersionMetrics';
  estimatedExecutionCount: Scalars['Long'];
  observedExecutionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type ServiceFieldRequestsByClientVersionOrderBySpec = {
  column: ServiceFieldRequestsByClientVersionColumn;
  direction: Ordering;
};

export type ServiceFieldRequestsByClientVersionRecord = {
  __typename?: 'ServiceFieldRequestsByClientVersionRecord';
  /** Dimensions of ServiceFieldRequestsByClientVersion that can be grouped by. */
  groupBy: ServiceFieldRequestsByClientVersionDimensions;
  /** Metrics of ServiceFieldRequestsByClientVersion that can be aggregated over. */
  metrics: ServiceFieldRequestsByClientVersionMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceFieldUsage. */
export enum ServiceFieldUsageColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  EstimatedExecutionCount = 'ESTIMATED_EXECUTION_COUNT',
  ExecutionCount = 'EXECUTION_COUNT',
  FieldName = 'FIELD_NAME',
  ParentType = 'PARENT_TYPE',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  ReferencingOperationCount = 'REFERENCING_OPERATION_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
}

export type ServiceFieldUsageDimensions = {
  __typename?: 'ServiceFieldUsageDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  parentType?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldUsage. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceFieldUsageFilter = {
  and?: InputMaybe<Array<ServiceFieldUsageFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fieldName dimension equals the given value if not null. To query for the null value, use {in: {fieldName: [null]}} instead. */
  fieldName?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceFieldUsageFilterIn>;
  not?: InputMaybe<ServiceFieldUsageFilter>;
  or?: InputMaybe<Array<ServiceFieldUsageFilter>>;
  /** Selects rows whose parentType dimension equals the given value if not null. To query for the null value, use {in: {parentType: [null]}} instead. */
  parentType?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceFieldUsage. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceFieldUsageFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fieldName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fieldName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose parentType dimension is in the given list. A null value in the list means a row with null for that dimension. */
  parentType?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceFieldUsageMetrics = {
  __typename?: 'ServiceFieldUsageMetrics';
  estimatedExecutionCount: Scalars['Long'];
  executionCount: Scalars['Long'];
  referencingOperationCount: Scalars['Long'];
};

export type ServiceFieldUsageOrderBySpec = {
  column: ServiceFieldUsageColumn;
  direction: Ordering;
};

export type ServiceFieldUsageRecord = {
  __typename?: 'ServiceFieldUsageRecord';
  /** Dimensions of ServiceFieldUsage that can be grouped by. */
  groupBy: ServiceFieldUsageDimensions;
  /** Metrics of ServiceFieldUsage that can be aggregated over. */
  metrics: ServiceFieldUsageMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutation = {
  __typename?: 'ServiceMutation';
  /**
   * Checks a proposed subgraph schema change against a published subgraph.
   * If the proposal composes successfully, perform a usage check for the resulting supergraph schema.
   */
  checkPartialSchema: CheckPartialSchemaResult;
  /**
   * Checks a proposed schema against the schema that has been published to
   * a particular variant, using metrics corresponding to `historicParameters`.
   * Callers can set `historicParameters` directly or rely on defaults set in the
   * graph's check configuration (7 days by default).
   * If they do not set `historicParameters` but set `useMaximumRetention`,
   * validation will use the maximum retention the graph has access to.
   */
  checkSchema: CheckSchemaResult;
  /** Make changes to a check workflow. */
  checkWorkflow?: Maybe<CheckWorkflowMutation>;
  createCompositionStatusSubscription: SchemaPublishSubscription;
  createSchemaPublishSubscription: SchemaPublishSubscription;
  /** Soft delete a graph. Data associated with the graph is not permanently deleted; Apollo support can undo. */
  delete?: Maybe<Scalars['Void']>;
  /** Delete the service's avatar. Requires Service.roles.canUpdateAvatar to be true. */
  deleteAvatar?: Maybe<AvatarDeleteError>;
  /** Delete an existing channel */
  deleteChannel: Scalars['Boolean'];
  /** Delete an existing query trigger */
  deleteQueryTrigger: Scalars['Boolean'];
  /** Deletes this service's current subscriptions specific to the ID, returns true if it existed */
  deleteRegistrySubscription: Scalars['Boolean'];
  /**
   * Deletes this service's current registry subscription(s) specific to its graph variant,
   * returns a list of subscription IDs that were deleted.
   */
  deleteRegistrySubscriptions: Array<Scalars['ID']>;
  deleteScheduledSummary: Scalars['Boolean'];
  /** Delete a variant by name. */
  deleteSchemaTag: DeleteSchemaTagResult;
  /** Given a UTC timestamp, delete all traces associated with this Service, on that corresponding day. If a timestamp to is provided, deletes all days inclusive. */
  deleteTraces?: Maybe<Scalars['Void']>;
  disableDatadogForwardingLegacyMetricNames?: Maybe<Service>;
  /** Hard delete a graph and all data associated with it. Its ID cannot be reused. */
  hardDelete?: Maybe<Scalars['Void']>;
  /** @deprecated Use service.id */
  id: Scalars['ID'];
  /**
   * Ignore an operation in future checks;
   * changes affecting it will be tracked,
   * but won't affect the outcome of the check.
   * Returns true if the operation is newly ignored,
   * false if it already was.
   */
  ignoreOperationsInChecks?: Maybe<IgnoreOperationsInChecksResult>;
  /**
   * Mark the changeset that affects an operation in a given check instance as safe.
   * Note that only operations marked as behavior changes are allowed to be marked as safe.
   */
  markChangesForOperationAsSafe: MarkChangesForOperationAsSafeResult;
  newKey: GraphApiKey;
  /** Adds an override to the given users permission for this graph */
  overrideUserPermission?: Maybe<Service>;
  /** Promote the schema with the given SHA-256 hash to active for the given variant/tag. */
  promoteSchema: PromoteSchemaResponseOrError;
  /** Publish to a subgraph. If composition is successful, this will update running routers. */
  publishSubgraph?: Maybe<CompositionAndUpsertResult>;
  registerOperationsWithResponse?: Maybe<RegisterOperationsMutationResponse>;
  /** Removes a subgraph. If composition is successful, this will update running routers. */
  removeImplementingServiceAndTriggerComposition: CompositionAndRemoveResult;
  removeKey?: Maybe<Scalars['Void']>;
  renameKey?: Maybe<GraphApiKey>;
  /** @deprecated use Mutation.reportSchema instead */
  reportServerInfo?: Maybe<ReportServerInfoResult>;
  service: Service;
  setDefaultBuildPipelineTrack?: Maybe<Scalars['String']>;
  /**
   * Store a given schema document. This schema will be attached to the graph but
   * not be associated with any variant. On success, returns the schema hash.
   */
  storeSchemaDocument: StoreSchemaResponseOrError;
  /** Test Slack notification channel */
  testSlackChannel?: Maybe<Scalars['Void']>;
  testSubscriptionForChannel: Scalars['String'];
  transfer?: Maybe<Service>;
  triggerRepublish?: Maybe<Scalars['Void']>;
  undelete?: Maybe<Service>;
  /**
   * Revert the effects of ignoreOperation.
   * Returns true if the operation is no longer ignored,
   * false if it wasn't.
   */
  unignoreOperationsInChecks?: Maybe<UnignoreOperationsInChecksResult>;
  /** Unmark changes for an operation as safe. */
  unmarkChangesForOperationAsSafe: MarkChangesForOperationAsSafeResult;
  /** Update schema check configuration for a graph. */
  updateCheckConfiguration: CheckConfiguration;
  updateDatadogMetricsConfig?: Maybe<DatadogMetricsConfig>;
  updateDescription?: Maybe<Service>;
  /** Update hiddenFromUninvitedNonAdminAccountMembers */
  updateHiddenFromUninvitedNonAdminAccountMembers?: Maybe<Service>;
  updateReadme?: Maybe<Service>;
  updateTitle?: Maybe<Service>;
  /** Publish a schema to this variant, either via a document or an introspection query result. */
  uploadSchema?: Maybe<UploadSchemaMutationResponse>;
  upsertChannel?: Maybe<Channel>;
  /** Creates a contract schema from a source variant and a set of filter configurations */
  upsertContractVariant: ContractVariantUpsertResult;
  /** Publish to a subgraph. If composition is successful, this will update running routers. */
  upsertImplementingServiceAndTriggerComposition?: Maybe<CompositionAndUpsertResult>;
  /** Create/update PagerDuty notification channel */
  upsertPagerDutyChannel?: Maybe<PagerDutyChannel>;
  upsertQueryTrigger?: Maybe<QueryTrigger>;
  /** Create or update a subscription for a service. */
  upsertRegistrySubscription: RegistrySubscription;
  upsertScheduledSummary?: Maybe<ScheduledSummary>;
  /** Create/update Slack notification channel */
  upsertSlackChannel?: Maybe<SlackChannel>;
  upsertWebhookChannel?: Maybe<WebhookChannel>;
  validateOperations: ValidateOperationsResult;
  /**
   * This mutation will not result in any changes to the implementing service
   * Run composition with the Implementing Service's partial schema replaced with the one provided
   * in the mutation's input. Store the composed schema, return the hash of the composed schema,
   * and any warnings and errors pertaining to composition.
   * This mutation will not run validation against operations.
   */
  validatePartialSchemaOfImplementingServiceAgainstGraph: CompositionValidationResult;
  /** Make changes to a graph variant. */
  variant?: Maybe<GraphVariantMutation>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationCheckPartialSchemaArgs = {
  frontend?: InputMaybe<Scalars['String']>;
  gitContext?: InputMaybe<GitContextInput>;
  graphVariant: Scalars['String'];
  historicParameters?: InputMaybe<HistoricQueryParameters>;
  implementingServiceName: Scalars['String'];
  introspectionEndpoint?: InputMaybe<Scalars['String']>;
  isSandboxCheck?: Scalars['Boolean'];
  partialSchema: PartialSchemaInput;
  useMaximumRetention?: InputMaybe<Scalars['Boolean']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationCheckSchemaArgs = {
  baseSchemaTag?: InputMaybe<Scalars['String']>;
  frontend?: InputMaybe<Scalars['String']>;
  gitContext?: InputMaybe<GitContextInput>;
  historicParameters?: InputMaybe<HistoricQueryParameters>;
  introspectionEndpoint?: InputMaybe<Scalars['String']>;
  isSandboxCheck?: Scalars['Boolean'];
  proposedSchema?: InputMaybe<IntrospectionSchemaInput>;
  proposedSchemaDocument?: InputMaybe<Scalars['String']>;
  proposedSchemaHash?: InputMaybe<Scalars['String']>;
  useMaximumRetention?: InputMaybe<Scalars['Boolean']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationCheckWorkflowArgs = {
  id: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationCreateCompositionStatusSubscriptionArgs = {
  channelID: Scalars['ID'];
  variant: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationCreateSchemaPublishSubscriptionArgs = {
  channelID: Scalars['ID'];
  variant: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationDeleteChannelArgs = {
  id: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationDeleteQueryTriggerArgs = {
  id: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationDeleteRegistrySubscriptionArgs = {
  id: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationDeleteRegistrySubscriptionsArgs = {
  variant: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationDeleteScheduledSummaryArgs = {
  id: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationDeleteSchemaTagArgs = {
  tag: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationDeleteTracesArgs = {
  from: Scalars['Timestamp'];
  to?: InputMaybe<Scalars['Timestamp']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationIgnoreOperationsInChecksArgs = {
  ids: Array<Scalars['ID']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationMarkChangesForOperationAsSafeArgs = {
  checkID: Scalars['ID'];
  operationID: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationNewKeyArgs = {
  keyName?: InputMaybe<Scalars['String']>;
  role?: UserPermission;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationOverrideUserPermissionArgs = {
  permission?: InputMaybe<UserPermission>;
  userID: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationPromoteSchemaArgs = {
  graphVariant: Scalars['String'];
  historicParameters?: InputMaybe<HistoricQueryParameters>;
  overrideComposedSchema?: Scalars['Boolean'];
  sha256: Scalars['SHA256'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationPublishSubgraphArgs = {
  activePartialSchema: PartialSchemaInput;
  gitContext?: InputMaybe<GitContextInput>;
  graphVariant: Scalars['String'];
  name: Scalars['String'];
  revision: Scalars['String'];
  url?: InputMaybe<Scalars['String']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationRegisterOperationsWithResponseArgs = {
  clientIdentity?: InputMaybe<RegisteredClientIdentityInput>;
  gitContext?: InputMaybe<GitContextInput>;
  graphVariant?: Scalars['String'];
  manifestVersion?: InputMaybe<Scalars['Int']>;
  operations: Array<RegisteredOperationInput>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationRemoveImplementingServiceAndTriggerCompositionArgs =
  {
    dryRun?: Scalars['Boolean'];
    graphVariant: Scalars['String'];
    name: Scalars['String'];
  };

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationRemoveKeyArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationRenameKeyArgs = {
  id: Scalars['ID'];
  newKeyName?: InputMaybe<Scalars['String']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationReportServerInfoArgs = {
  executableSchema?: InputMaybe<Scalars['String']>;
  info: EdgeServerInfo;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationSetDefaultBuildPipelineTrackArgs = {
  version: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationStoreSchemaDocumentArgs = {
  schemaDocument: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationTestSlackChannelArgs = {
  id: Scalars['ID'];
  notification: SlackNotificationInput;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationTestSubscriptionForChannelArgs = {
  channelID: Scalars['ID'];
  subscriptionID: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationTransferArgs = {
  to: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationTriggerRepublishArgs = {
  graphVariant: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUnignoreOperationsInChecksArgs = {
  ids: Array<Scalars['ID']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUnmarkChangesForOperationAsSafeArgs = {
  checkID: Scalars['ID'];
  operationID: Scalars['ID'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpdateCheckConfigurationArgs = {
  excludedClients?: InputMaybe<Array<ClientFilterInput>>;
  excludedOperationNames?: InputMaybe<Array<OperationNameFilterInput>>;
  excludedOperations?: InputMaybe<Array<ExcludedOperationInput>>;
  includeBaseVariant?: InputMaybe<Scalars['Boolean']>;
  includedVariants?: InputMaybe<Array<Scalars['String']>>;
  operationCountThreshold?: InputMaybe<Scalars['Int']>;
  operationCountThresholdPercentage?: InputMaybe<Scalars['Float']>;
  timeRangeSeconds?: InputMaybe<Scalars['Long']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpdateDatadogMetricsConfigArgs = {
  apiKey?: InputMaybe<Scalars['String']>;
  apiRegion?: InputMaybe<DatadogApiRegion>;
  enabled?: InputMaybe<Scalars['Boolean']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpdateDescriptionArgs = {
  description: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpdateHiddenFromUninvitedNonAdminAccountMembersArgs =
  {
    hiddenFromUninvitedNonAdminAccountMembers: Scalars['Boolean'];
  };

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpdateReadmeArgs = {
  readme: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpdateTitleArgs = {
  title: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUploadSchemaArgs = {
  errorOnBadRequest?: Scalars['Boolean'];
  gitContext?: InputMaybe<GitContextInput>;
  historicParameters?: InputMaybe<HistoricQueryParameters>;
  overrideComposedSchema?: Scalars['Boolean'];
  schema?: InputMaybe<IntrospectionSchemaInput>;
  schemaDocument?: InputMaybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertChannelArgs = {
  id?: InputMaybe<Scalars['ID']>;
  pagerDutyChannel?: InputMaybe<PagerDutyChannelInput>;
  slackChannel?: InputMaybe<SlackChannelInput>;
  webhookChannel?: InputMaybe<WebhookChannelInput>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertContractVariantArgs = {
  contractVariantName: Scalars['String'];
  filterConfig: FilterConfigInput;
  initiateLaunch?: Scalars['Boolean'];
  sourceVariant: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertImplementingServiceAndTriggerCompositionArgs =
  {
    activePartialSchema: PartialSchemaInput;
    gitContext?: InputMaybe<GitContextInput>;
    graphVariant: Scalars['String'];
    name: Scalars['String'];
    revision: Scalars['String'];
    url?: InputMaybe<Scalars['String']>;
  };

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertPagerDutyChannelArgs = {
  channel: PagerDutyChannelInput;
  id?: InputMaybe<Scalars['ID']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertQueryTriggerArgs = {
  id?: InputMaybe<Scalars['ID']>;
  trigger: QueryTriggerInput;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertRegistrySubscriptionArgs = {
  channelID?: InputMaybe<Scalars['ID']>;
  id?: InputMaybe<Scalars['ID']>;
  options?: InputMaybe<SubscriptionOptionsInput>;
  variant?: InputMaybe<Scalars['String']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertScheduledSummaryArgs = {
  channelID?: InputMaybe<Scalars['ID']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['ID']>;
  tag?: InputMaybe<Scalars['String']>;
  timezone?: InputMaybe<Scalars['String']>;
  variant?: InputMaybe<Scalars['String']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertSlackChannelArgs = {
  channel: SlackChannelInput;
  id?: InputMaybe<Scalars['ID']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationUpsertWebhookChannelArgs = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  secretToken?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationValidateOperationsArgs = {
  gitContext?: InputMaybe<GitContextInput>;
  operations: Array<OperationDocumentInput>;
  tag?: InputMaybe<Scalars['String']>;
};

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationValidatePartialSchemaOfImplementingServiceAgainstGraphArgs =
  {
    graphVariant: Scalars['String'];
    implementingServiceName: Scalars['String'];
    partialSchema: PartialSchemaInput;
  };

/** Contains mutations related to Studio graphs and subgraphs. */
export type ServiceMutationVariantArgs = {
  name: Scalars['String'];
};

/** Columns of ServiceOperationCheckStats. */
export enum ServiceOperationCheckStatsColumn {
  CachedRequestsCount = 'CACHED_REQUESTS_COUNT',
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
  UncachedRequestsCount = 'UNCACHED_REQUESTS_COUNT',
}

export type ServiceOperationCheckStatsDimensions = {
  __typename?: 'ServiceOperationCheckStatsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceOperationCheckStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceOperationCheckStatsFilter = {
  and?: InputMaybe<Array<ServiceOperationCheckStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceOperationCheckStatsFilterIn>;
  not?: InputMaybe<ServiceOperationCheckStatsFilter>;
  or?: InputMaybe<Array<ServiceOperationCheckStatsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceOperationCheckStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceOperationCheckStatsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceOperationCheckStatsMetrics = {
  __typename?: 'ServiceOperationCheckStatsMetrics';
  cachedRequestsCount: Scalars['Long'];
  uncachedRequestsCount: Scalars['Long'];
};

export type ServiceOperationCheckStatsOrderBySpec = {
  column: ServiceOperationCheckStatsColumn;
  direction: Ordering;
};

export type ServiceOperationCheckStatsRecord = {
  __typename?: 'ServiceOperationCheckStatsRecord';
  /** Dimensions of ServiceOperationCheckStats that can be grouped by. */
  groupBy: ServiceOperationCheckStatsDimensions;
  /** Metrics of ServiceOperationCheckStats that can be aggregated over. */
  metrics: ServiceOperationCheckStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceQueryStats. */
export enum ServiceQueryStatsColumn {
  CachedHistogram = 'CACHED_HISTOGRAM',
  CachedRequestsCount = 'CACHED_REQUESTS_COUNT',
  CacheTtlHistogram = 'CACHE_TTL_HISTOGRAM',
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  ForbiddenOperationCount = 'FORBIDDEN_OPERATION_COUNT',
  FromEngineproxy = 'FROM_ENGINEPROXY',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  RegisteredOperationCount = 'REGISTERED_OPERATION_COUNT',
  RequestsWithErrorsCount = 'REQUESTS_WITH_ERRORS_COUNT',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
  UncachedHistogram = 'UNCACHED_HISTOGRAM',
  UncachedRequestsCount = 'UNCACHED_REQUESTS_COUNT',
}

export type ServiceQueryStatsDimensions = {
  __typename?: 'ServiceQueryStatsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  fromEngineproxy?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  querySignature?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
};

/** Filter for data in ServiceQueryStats. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceQueryStatsFilter = {
  and?: InputMaybe<Array<ServiceQueryStatsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose fromEngineproxy dimension equals the given value if not null. To query for the null value, use {in: {fromEngineproxy: [null]}} instead. */
  fromEngineproxy?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceQueryStatsFilterIn>;
  not?: InputMaybe<ServiceQueryStatsFilter>;
  or?: InputMaybe<Array<ServiceQueryStatsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
};

/** Filter for data in ServiceQueryStats. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceQueryStatsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose fromEngineproxy dimension is in the given list. A null value in the list means a row with null for that dimension. */
  fromEngineproxy?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ServiceQueryStatsMetrics = {
  __typename?: 'ServiceQueryStatsMetrics';
  cacheTtlHistogram: DurationHistogram;
  cachedHistogram: DurationHistogram;
  cachedRequestsCount: Scalars['Long'];
  forbiddenOperationCount: Scalars['Long'];
  registeredOperationCount: Scalars['Long'];
  requestsWithErrorsCount: Scalars['Long'];
  totalLatencyHistogram: DurationHistogram;
  totalRequestCount: Scalars['Long'];
  uncachedHistogram: DurationHistogram;
  uncachedRequestsCount: Scalars['Long'];
};

export type ServiceQueryStatsOrderBySpec = {
  column: ServiceQueryStatsColumn;
  direction: Ordering;
};

export type ServiceQueryStatsRecord = {
  __typename?: 'ServiceQueryStatsRecord';
  /** Dimensions of ServiceQueryStats that can be grouped by. */
  groupBy: ServiceQueryStatsDimensions;
  /** Metrics of ServiceQueryStats that can be aggregated over. */
  metrics: ServiceQueryStatsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** A map from role (permission) String to boolean that the current user is allowed for a particular graph. */
export type ServiceRoles = {
  __typename?: 'ServiceRoles';
  /** Whether the currently authenticated user is permitted to perform schema checks (i.e. run `rover (sub)graph check`). */
  canCheckSchemas: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to create new graph variants. */
  canCreateVariants: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to delete the graph in question */
  canDelete: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to manage user access to the graph in question. */
  canManageAccess: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to manage the build configuration (e.g. build pipeline version). */
  canManageBuildConfig: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to manage 3rd party integrations (e.g. Datadog forwarding). */
  canManageIntegrations: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to manage graph-level API keys. */
  canManageKeys: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to perform basic administration (e.g. set to public) over variants. */
  canManageVariants: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to view details about the build configuration (e.g. build pipeline version). */
  canQueryBuildConfig: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to view details of the check configuration for this graph. */
  canQueryCheckConfiguration: Scalars['Boolean'];
  canQueryDeletedImplementingServices: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to view which subgraphs the graph is composed of. */
  canQueryImplementingServices: Scalars['Boolean'];
  canQueryIntegrations: Scalars['Boolean'];
  canQueryPrivateInfo: Scalars['Boolean'];
  canQueryPublicInfo: Scalars['Boolean'];
  canQueryReadmeAuthor: Scalars['Boolean'];
  canQueryRoleOverrides: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to download schemas owned by this graph. */
  canQuerySchemas: Scalars['Boolean'];
  canQueryStats: Scalars['Boolean'];
  canQueryTokens: Scalars['Boolean'];
  canQueryTraces: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to register operations (i.e. `apollo client:push`) for this graph. */
  canRegisterOperations: Scalars['Boolean'];
  canStoreSchemasWithoutVariant: Scalars['Boolean'];
  canUndelete: Scalars['Boolean'];
  canUpdateAvatar: Scalars['Boolean'];
  canUpdateDescription: Scalars['Boolean'];
  canUpdateTitle: Scalars['Boolean'];
  /** @deprecated Replaced with canQueryTraces and canQueryStats */
  canVisualizeStats: Scalars['Boolean'];
  /** Whether the currently authenticated user is permitted to make updates to the check configuration for this graph. */
  canWriteCheckConfiguration: Scalars['Boolean'];
  /** @deprecated Never worked, not replaced */
  canWriteTraces: Scalars['Boolean'];
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindow = {
  __typename?: 'ServiceStatsWindow';
  billingUsageStats: Array<ServiceBillingUsageStatsRecord>;
  edgeServerInfos: Array<ServiceEdgeServerInfosRecord>;
  errorStats: Array<ServiceErrorStatsRecord>;
  fieldExecutions: Array<ServiceFieldExecutionsRecord>;
  fieldLatencies: Array<ServiceFieldLatenciesRecord>;
  fieldRequestsByClientVersion: Array<ServiceFieldRequestsByClientVersionRecord>;
  fieldStats: Array<ServiceFieldLatenciesRecord>;
  fieldUsage: Array<ServiceFieldUsageRecord>;
  operationCheckStats: Array<ServiceOperationCheckStatsRecord>;
  queryStats: Array<ServiceQueryStatsRecord>;
  /** From field rounded down to the nearest resolution. */
  roundedDownFrom: Scalars['Timestamp'];
  /** To field rounded up to the nearest resolution. */
  roundedUpTo: Scalars['Timestamp'];
  tracePathErrorsRefs: Array<ServiceTracePathErrorsRefsRecord>;
  traceRefs: Array<ServiceTraceRefsRecord>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowBillingUsageStatsArgs = {
  filter?: InputMaybe<ServiceBillingUsageStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceBillingUsageStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowEdgeServerInfosArgs = {
  filter?: InputMaybe<ServiceEdgeServerInfosFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceEdgeServerInfosOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowErrorStatsArgs = {
  filter?: InputMaybe<ServiceErrorStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceErrorStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowFieldExecutionsArgs = {
  filter?: InputMaybe<ServiceFieldExecutionsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceFieldExecutionsOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowFieldLatenciesArgs = {
  filter?: InputMaybe<ServiceFieldLatenciesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceFieldLatenciesOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowFieldRequestsByClientVersionArgs = {
  filter?: InputMaybe<ServiceFieldRequestsByClientVersionFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceFieldRequestsByClientVersionOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowFieldStatsArgs = {
  filter?: InputMaybe<ServiceFieldLatenciesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceFieldLatenciesOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowFieldUsageArgs = {
  filter?: InputMaybe<ServiceFieldUsageFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceFieldUsageOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowOperationCheckStatsArgs = {
  filter?: InputMaybe<ServiceOperationCheckStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceOperationCheckStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowQueryStatsArgs = {
  filter?: InputMaybe<ServiceQueryStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceQueryStatsOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowTracePathErrorsRefsArgs = {
  filter?: InputMaybe<ServiceTracePathErrorsRefsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceTracePathErrorsRefsOrderBySpec>>;
};

/** A time window with a specified granularity over a given service. */
export type ServiceStatsWindowTraceRefsArgs = {
  filter?: InputMaybe<ServiceTraceRefsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ServiceTraceRefsOrderBySpec>>;
};

/** Columns of ServiceTracePathErrorsRefs. */
export enum ServiceTracePathErrorsRefsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  DurationBucket = 'DURATION_BUCKET',
  ErrorsCountInPath = 'ERRORS_COUNT_IN_PATH',
  ErrorsCountInTrace = 'ERRORS_COUNT_IN_TRACE',
  ErrorMessage = 'ERROR_MESSAGE',
  Path = 'PATH',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
  TraceHttpStatusCode = 'TRACE_HTTP_STATUS_CODE',
  TraceId = 'TRACE_ID',
  TraceSizeBytes = 'TRACE_SIZE_BYTES',
  TraceStartsAt = 'TRACE_STARTS_AT',
}

export type ServiceTracePathErrorsRefsDimensions = {
  __typename?: 'ServiceTracePathErrorsRefsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  durationBucket?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  traceHttpStatusCode?: Maybe<Scalars['Int']>;
  traceId?: Maybe<Scalars['ID']>;
  traceStartsAt?: Maybe<Scalars['Timestamp']>;
};

/** Filter for data in ServiceTracePathErrorsRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceTracePathErrorsRefsFilter = {
  and?: InputMaybe<Array<ServiceTracePathErrorsRefsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
  durationBucket?: InputMaybe<Scalars['Int']>;
  /** Selects rows whose errorMessage dimension equals the given value if not null. To query for the null value, use {in: {errorMessage: [null]}} instead. */
  errorMessage?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<ServiceTracePathErrorsRefsFilterIn>;
  not?: InputMaybe<ServiceTracePathErrorsRefsFilter>;
  or?: InputMaybe<Array<ServiceTracePathErrorsRefsFilter>>;
  /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
  path?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose traceHttpStatusCode dimension equals the given value if not null. To query for the null value, use {in: {traceHttpStatusCode: [null]}} instead. */
  traceHttpStatusCode?: InputMaybe<Scalars['Int']>;
  /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
  traceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in ServiceTracePathErrorsRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceTracePathErrorsRefsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
  durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose errorMessage dimension is in the given list. A null value in the list means a row with null for that dimension. */
  errorMessage?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose traceHttpStatusCode dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceHttpStatusCode?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ServiceTracePathErrorsRefsMetrics = {
  __typename?: 'ServiceTracePathErrorsRefsMetrics';
  errorsCountInPath: Scalars['Long'];
  errorsCountInTrace: Scalars['Long'];
  traceSizeBytes: Scalars['Long'];
};

export type ServiceTracePathErrorsRefsOrderBySpec = {
  column: ServiceTracePathErrorsRefsColumn;
  direction: Ordering;
};

export type ServiceTracePathErrorsRefsRecord = {
  __typename?: 'ServiceTracePathErrorsRefsRecord';
  /** Dimensions of ServiceTracePathErrorsRefs that can be grouped by. */
  groupBy: ServiceTracePathErrorsRefsDimensions;
  /** Metrics of ServiceTracePathErrorsRefs that can be aggregated over. */
  metrics: ServiceTracePathErrorsRefsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of ServiceTraceRefs. */
export enum ServiceTraceRefsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  DurationBucket = 'DURATION_BUCKET',
  DurationNs = 'DURATION_NS',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  Timestamp = 'TIMESTAMP',
  TraceId = 'TRACE_ID',
  TraceSizeBytes = 'TRACE_SIZE_BYTES',
}

export type ServiceTraceRefsDimensions = {
  __typename?: 'ServiceTraceRefsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  durationBucket?: Maybe<Scalars['Int']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  querySignature?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  traceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in ServiceTraceRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type ServiceTraceRefsFilter = {
  and?: InputMaybe<Array<ServiceTraceRefsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
  durationBucket?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<ServiceTraceRefsFilterIn>;
  not?: InputMaybe<ServiceTraceRefsFilter>;
  or?: InputMaybe<Array<ServiceTraceRefsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
  traceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in ServiceTraceRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type ServiceTraceRefsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
  durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type ServiceTraceRefsMetrics = {
  __typename?: 'ServiceTraceRefsMetrics';
  durationNs: Scalars['Long'];
  traceSizeBytes: Scalars['Long'];
};

export type ServiceTraceRefsOrderBySpec = {
  column: ServiceTraceRefsColumn;
  direction: Ordering;
};

export type ServiceTraceRefsRecord = {
  __typename?: 'ServiceTraceRefsRecord';
  /** Dimensions of ServiceTraceRefs that can be grouped by. */
  groupBy: ServiceTraceRefsDimensions;
  /** Metrics of ServiceTraceRefs that can be aggregated over. */
  metrics: ServiceTraceRefsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type SetupIntentResult =
  | NotFoundError
  | PermissionError
  | SetupIntentSuccess;

export type SetupIntentSuccess = {
  __typename?: 'SetupIntentSuccess';
  clientSecret: Scalars['String'];
};

/** Slack notification channel */
export type SlackChannel = Channel & {
  __typename?: 'SlackChannel';
  id: Scalars['ID'];
  name: Scalars['String'];
  subscriptions: Array<ChannelSubscription>;
  url: Scalars['String'];
};

/** Slack notification channel parameters */
export type SlackChannelInput = {
  name?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type SlackNotificationField = {
  key: Scalars['String'];
  value: Scalars['String'];
};

/** Slack notification message */
export type SlackNotificationInput = {
  color?: InputMaybe<Scalars['String']>;
  fallback: Scalars['String'];
  fields?: InputMaybe<Array<SlackNotificationField>>;
  iconUrl?: InputMaybe<Scalars['String']>;
  text?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['Timestamp']>;
  title?: InputMaybe<Scalars['String']>;
  titleLink?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** A location in a source code file. */
export type SourceLocation = {
  __typename?: 'SourceLocation';
  /** Column number. */
  column: Scalars['Int'];
  /** Line number. */
  line: Scalars['Int'];
};

export type StartUsageBasedPlanResult =
  | NotFoundError
  | PermissionError
  | StartUsageBasedPlanSuccess;

export type StartUsageBasedPlanSuccess = {
  __typename?: 'StartUsageBasedPlanSuccess';
  customerPlanId: Scalars['String'];
};

/** A time window with a specified granularity. */
export type StatsWindow = {
  __typename?: 'StatsWindow';
  billingUsageStats: Array<BillingUsageStatsRecord>;
  edgeServerInfos: Array<EdgeServerInfosRecord>;
  errorStats: Array<ErrorStatsRecord>;
  fieldExecutions: Array<FieldExecutionsRecord>;
  fieldLatencies: Array<FieldLatenciesRecord>;
  fieldRequestsByClientVersion: Array<FieldRequestsByClientVersionRecord>;
  fieldUsage: Array<FieldUsageRecord>;
  operationCheckStats: Array<OperationCheckStatsRecord>;
  queryStats: Array<QueryStatsRecord>;
  /** From field rounded down to the nearest resolution. */
  roundedDownFrom: Scalars['Timestamp'];
  /** To field rounded up to the nearest resolution. */
  roundedUpTo: Scalars['Timestamp'];
  tracePathErrorsRefs: Array<TracePathErrorsRefsRecord>;
  traceRefs: Array<TraceRefsRecord>;
};

/** A time window with a specified granularity. */
export type StatsWindowBillingUsageStatsArgs = {
  filter?: InputMaybe<BillingUsageStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BillingUsageStatsOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowEdgeServerInfosArgs = {
  filter?: InputMaybe<EdgeServerInfosFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<EdgeServerInfosOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowErrorStatsArgs = {
  filter?: InputMaybe<ErrorStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<ErrorStatsOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowFieldExecutionsArgs = {
  filter?: InputMaybe<FieldExecutionsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FieldExecutionsOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowFieldLatenciesArgs = {
  filter?: InputMaybe<FieldLatenciesFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FieldLatenciesOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowFieldRequestsByClientVersionArgs = {
  filter?: InputMaybe<FieldRequestsByClientVersionFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FieldRequestsByClientVersionOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowFieldUsageArgs = {
  filter?: InputMaybe<FieldUsageFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<FieldUsageOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowOperationCheckStatsArgs = {
  filter?: InputMaybe<OperationCheckStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OperationCheckStatsOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowQueryStatsArgs = {
  filter?: InputMaybe<QueryStatsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<QueryStatsOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowTracePathErrorsRefsArgs = {
  filter?: InputMaybe<TracePathErrorsRefsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TracePathErrorsRefsOrderBySpec>>;
};

/** A time window with a specified granularity. */
export type StatsWindowTraceRefsArgs = {
  filter?: InputMaybe<TraceRefsFilter>;
  limit?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TraceRefsOrderBySpec>>;
};

export type StoreSchemaError = {
  __typename?: 'StoreSchemaError';
  code: StoreSchemaErrorCode;
  message: Scalars['String'];
};

export enum StoreSchemaErrorCode {
  SchemaIsNotParsable = 'SCHEMA_IS_NOT_PARSABLE',
  SchemaIsNotValid = 'SCHEMA_IS_NOT_VALID',
}

export type StoreSchemaResponse = {
  __typename?: 'StoreSchemaResponse';
  sha256: Scalars['SHA256'];
};

export type StoreSchemaResponseOrError = StoreSchemaError | StoreSchemaResponse;

export type StoredApprovedChange = {
  __typename?: 'StoredApprovedChange';
  argNode?: Maybe<NamedIntrospectionArgNoDescription>;
  childNode?: Maybe<NamedIntrospectionValueNoDescription>;
  code: ChangeCode;
  parentNode?: Maybe<NamedIntrospectionTypeNoDescription>;
};

export type StringToString = {
  __typename?: 'StringToString';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type StringToStringInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

/** A subgraph in a federated Studio supergraph. */
export type Subgraph = {
  __typename?: 'Subgraph';
  /** The subgraph schema document's SHA256 hash, represented as a hexadecimal string. */
  hash: Scalars['String'];
  /** The subgraph's registered name. */
  name: Scalars['String'];
  /** The subgraph's routing URL, provided to gateways that use managed federation. */
  routingURL: Scalars['String'];
};

export type SubgraphChange = {
  __typename?: 'SubgraphChange';
  name: Scalars['ID'];
  type: SubgraphChangeType;
};

export enum SubgraphChangeType {
  Addition = 'ADDITION',
  Deletion = 'DELETION',
  Modification = 'MODIFICATION',
}

export type SubgraphCheckAsyncInput = {
  config: HistoricQueryParametersInput;
  gitContext: GitContextInput;
  graphRef: Scalars['ID'];
  /** Endpoint must be specified if isSandbox is true */
  introspectionEndpoint?: InputMaybe<Scalars['String']>;
  isSandbox: Scalars['Boolean'];
  proposedSchema: Scalars['GraphQLDocument'];
  subgraphName: Scalars['String'];
};

export type SubgraphConfig = {
  __typename?: 'SubgraphConfig';
  id: Scalars['ID'];
  name: Scalars['String'];
  schemaHash: Scalars['String'];
  sdl: Scalars['String'];
  url: Scalars['String'];
};

export type SubscriptionOptions = {
  __typename?: 'SubscriptionOptions';
  /** Enables notifications for schema updates */
  schemaUpdates: Scalars['Boolean'];
};

export type SubscriptionOptionsInput = {
  /** Enables notifications for schema updates */
  schemaUpdates: Scalars['Boolean'];
};

export enum SubscriptionState {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Expired = 'EXPIRED',
  Future = 'FUTURE',
  PastDue = 'PAST_DUE',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN',
}

export enum SubscriptionStateV2 {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Expired = 'EXPIRED',
  Future = 'FUTURE',
  PastDue = 'PAST_DUE',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN',
}

export type SyncBillingAccountResult =
  | PermissionError
  | SyncBillingAccountSuccess;

export type SyncBillingAccountSuccess = {
  __typename?: 'SyncBillingAccountSuccess';
  message: Scalars['String'];
};

export type TemporaryUrl = {
  __typename?: 'TemporaryURL';
  url: Scalars['String'];
};

export enum ThemeName {
  Dark = 'DARK',
  Light = 'LIGHT',
}

export enum TicketPriority {
  P0 = 'P0',
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
}

export enum TicketStatus {
  Closed = 'CLOSED',
  Hold = 'HOLD',
  New = 'NEW',
  Open = 'OPEN',
  Pending = 'PENDING',
  Solved = 'SOLVED',
}

export type TimezoneOffset = {
  __typename?: 'TimezoneOffset';
  minutesOffsetFromUTC: Scalars['Int'];
  zoneID: Scalars['String'];
};

/** Counts of changes. */
export type TotalChangeSummaryCounts = {
  __typename?: 'TotalChangeSummaryCounts';
  /**
   * Number of changes that are additions. This includes adding types, adding fields to object, input
   * object, and interface types, adding values to enums, adding members to interfaces and unions, and
   * adding arguments.
   */
  additions: Scalars['Int'];
  /** Number of changes that are new usages of the @deprecated directive. */
  deprecations: Scalars['Int'];
  /**
   * Number of changes that are edits. This includes types changing kind, fields and arguments
   * changing type, arguments changing default value, and any description changes. This also includes
   * edits to @deprecated reason strings.
   */
  edits: Scalars['Int'];
  /**
   * Number of changes that are removals. This includes removing types, removing fields from object,
   * input object, and interface types, removing values from enums, removing members from interfaces
   * and unions, and removing arguments. This also includes removing @deprecated usages.
   */
  removals: Scalars['Int'];
};

export type Trace = {
  __typename?: 'Trace';
  cacheMaxAgeMs?: Maybe<Scalars['Float']>;
  cacheScope?: Maybe<CacheScope>;
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  durationMs: Scalars['Float'];
  endTime: Scalars['Timestamp'];
  http?: Maybe<TraceHttp>;
  id: Scalars['ID'];
  operationName?: Maybe<Scalars['String']>;
  protobuf: Protobuf;
  root: TraceNode;
  signature: Scalars['String'];
  startTime: Scalars['Timestamp'];
  unexecutedOperationBody?: Maybe<Scalars['String']>;
  unexecutedOperationName?: Maybe<Scalars['String']>;
  variablesJSON: Array<StringToString>;
};

export type TraceError = {
  __typename?: 'TraceError';
  json: Scalars['String'];
  locations: Array<TraceSourceLocation>;
  message: Scalars['String'];
  timestamp?: Maybe<Scalars['Timestamp']>;
};

export type TraceHttp = {
  __typename?: 'TraceHTTP';
  host?: Maybe<Scalars['String']>;
  method: HttpMethod;
  path?: Maybe<Scalars['String']>;
  protocol?: Maybe<Scalars['String']>;
  requestHeaders: Array<StringToString>;
  responseHeaders: Array<StringToString>;
  secure: Scalars['Boolean'];
  statusCode: Scalars['Int'];
};

export type TraceNode = {
  __typename?: 'TraceNode';
  cacheMaxAgeMs?: Maybe<Scalars['Float']>;
  cacheScope?: Maybe<CacheScope>;
  children: Array<TraceNode>;
  childrenIds: Array<Scalars['ID']>;
  descendants: Array<TraceNode>;
  descendantsIds: Array<Scalars['ID']>;
  endTime: Scalars['Timestamp'];
  errors: Array<TraceError>;
  id: Scalars['ID'];
  key?: Maybe<Scalars['StringOrInt']>;
  originalFieldName?: Maybe<Scalars['String']>;
  parent: Scalars['ID'];
  parentId?: Maybe<Scalars['ID']>;
  path: Array<Scalars['String']>;
  startTime: Scalars['Timestamp'];
  type?: Maybe<Scalars['String']>;
};

/** Columns of TracePathErrorsRefs. */
export enum TracePathErrorsRefsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  DurationBucket = 'DURATION_BUCKET',
  ErrorsCountInPath = 'ERRORS_COUNT_IN_PATH',
  ErrorsCountInTrace = 'ERRORS_COUNT_IN_TRACE',
  ErrorMessage = 'ERROR_MESSAGE',
  Path = 'PATH',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  TraceHttpStatusCode = 'TRACE_HTTP_STATUS_CODE',
  TraceId = 'TRACE_ID',
  TraceSizeBytes = 'TRACE_SIZE_BYTES',
  TraceStartsAt = 'TRACE_STARTS_AT',
}

export type TracePathErrorsRefsDimensions = {
  __typename?: 'TracePathErrorsRefsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  durationBucket?: Maybe<Scalars['Int']>;
  errorMessage?: Maybe<Scalars['String']>;
  /** If metrics were collected from a federated service, this field will be prefixed with `service:<SERVICE_NAME>.` */
  path?: Maybe<Scalars['String']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
  traceHttpStatusCode?: Maybe<Scalars['Int']>;
  traceId?: Maybe<Scalars['ID']>;
  traceStartsAt?: Maybe<Scalars['Timestamp']>;
};

/** Filter for data in TracePathErrorsRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type TracePathErrorsRefsFilter = {
  and?: InputMaybe<Array<TracePathErrorsRefsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
  durationBucket?: InputMaybe<Scalars['Int']>;
  /** Selects rows whose errorMessage dimension equals the given value if not null. To query for the null value, use {in: {errorMessage: [null]}} instead. */
  errorMessage?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<TracePathErrorsRefsFilterIn>;
  not?: InputMaybe<TracePathErrorsRefsFilter>;
  or?: InputMaybe<Array<TracePathErrorsRefsFilter>>;
  /** Selects rows whose path dimension equals the given value if not null. To query for the null value, use {in: {path: [null]}} instead. */
  path?: InputMaybe<Scalars['String']>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose traceHttpStatusCode dimension equals the given value if not null. To query for the null value, use {in: {traceHttpStatusCode: [null]}} instead. */
  traceHttpStatusCode?: InputMaybe<Scalars['Int']>;
  /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
  traceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in TracePathErrorsRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type TracePathErrorsRefsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
  durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose errorMessage dimension is in the given list. A null value in the list means a row with null for that dimension. */
  errorMessage?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose path dimension is in the given list. A null value in the list means a row with null for that dimension. */
  path?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose traceHttpStatusCode dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceHttpStatusCode?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TracePathErrorsRefsMetrics = {
  __typename?: 'TracePathErrorsRefsMetrics';
  errorsCountInPath: Scalars['Long'];
  errorsCountInTrace: Scalars['Long'];
  traceSizeBytes: Scalars['Long'];
};

export type TracePathErrorsRefsOrderBySpec = {
  column: TracePathErrorsRefsColumn;
  direction: Ordering;
};

export type TracePathErrorsRefsRecord = {
  __typename?: 'TracePathErrorsRefsRecord';
  /** Dimensions of TracePathErrorsRefs that can be grouped by. */
  groupBy: TracePathErrorsRefsDimensions;
  /** Metrics of TracePathErrorsRefs that can be aggregated over. */
  metrics: TracePathErrorsRefsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

/** Columns of TraceRefs. */
export enum TraceRefsColumn {
  ClientName = 'CLIENT_NAME',
  ClientVersion = 'CLIENT_VERSION',
  DurationBucket = 'DURATION_BUCKET',
  DurationNs = 'DURATION_NS',
  QueryId = 'QUERY_ID',
  QueryName = 'QUERY_NAME',
  SchemaHash = 'SCHEMA_HASH',
  SchemaTag = 'SCHEMA_TAG',
  ServiceId = 'SERVICE_ID',
  Timestamp = 'TIMESTAMP',
  TraceId = 'TRACE_ID',
  TraceSizeBytes = 'TRACE_SIZE_BYTES',
}

export type TraceRefsDimensions = {
  __typename?: 'TraceRefsDimensions';
  clientName?: Maybe<Scalars['String']>;
  clientVersion?: Maybe<Scalars['String']>;
  durationBucket?: Maybe<Scalars['Int']>;
  queryId?: Maybe<Scalars['ID']>;
  queryName?: Maybe<Scalars['String']>;
  querySignature?: Maybe<Scalars['String']>;
  schemaHash?: Maybe<Scalars['String']>;
  schemaTag?: Maybe<Scalars['String']>;
  serviceId?: Maybe<Scalars['ID']>;
  traceId?: Maybe<Scalars['ID']>;
};

/** Filter for data in TraceRefs. Fields with dimension names represent equality checks. All fields are implicitly ANDed together. */
export type TraceRefsFilter = {
  and?: InputMaybe<Array<TraceRefsFilter>>;
  /** Selects rows whose clientName dimension equals the given value if not null. To query for the null value, use {in: {clientName: [null]}} instead. */
  clientName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose clientVersion dimension equals the given value if not null. To query for the null value, use {in: {clientVersion: [null]}} instead. */
  clientVersion?: InputMaybe<Scalars['String']>;
  /** Selects rows whose durationBucket dimension equals the given value if not null. To query for the null value, use {in: {durationBucket: [null]}} instead. */
  durationBucket?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<TraceRefsFilterIn>;
  not?: InputMaybe<TraceRefsFilter>;
  or?: InputMaybe<Array<TraceRefsFilter>>;
  /** Selects rows whose queryId dimension equals the given value if not null. To query for the null value, use {in: {queryId: [null]}} instead. */
  queryId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose queryName dimension equals the given value if not null. To query for the null value, use {in: {queryName: [null]}} instead. */
  queryName?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaHash dimension equals the given value if not null. To query for the null value, use {in: {schemaHash: [null]}} instead. */
  schemaHash?: InputMaybe<Scalars['String']>;
  /** Selects rows whose schemaTag dimension equals the given value if not null. To query for the null value, use {in: {schemaTag: [null]}} instead. */
  schemaTag?: InputMaybe<Scalars['String']>;
  /** Selects rows whose serviceId dimension equals the given value if not null. To query for the null value, use {in: {serviceId: [null]}} instead. */
  serviceId?: InputMaybe<Scalars['ID']>;
  /** Selects rows whose traceId dimension equals the given value if not null. To query for the null value, use {in: {traceId: [null]}} instead. */
  traceId?: InputMaybe<Scalars['ID']>;
};

/** Filter for data in TraceRefs. Fields match if the corresponding dimension's value is in the given list. All fields are implicitly ANDed together. */
export type TraceRefsFilterIn = {
  /** Selects rows whose clientName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose clientVersion dimension is in the given list. A null value in the list means a row with null for that dimension. */
  clientVersion?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose durationBucket dimension is in the given list. A null value in the list means a row with null for that dimension. */
  durationBucket?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  /** Selects rows whose queryId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose queryName dimension is in the given list. A null value in the list means a row with null for that dimension. */
  queryName?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaHash dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaHash?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose schemaTag dimension is in the given list. A null value in the list means a row with null for that dimension. */
  schemaTag?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Selects rows whose serviceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  serviceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Selects rows whose traceId dimension is in the given list. A null value in the list means a row with null for that dimension. */
  traceId?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type TraceRefsMetrics = {
  __typename?: 'TraceRefsMetrics';
  durationNs: Scalars['Long'];
  traceSizeBytes: Scalars['Long'];
};

export type TraceRefsOrderBySpec = {
  column: TraceRefsColumn;
  direction: Ordering;
};

export type TraceRefsRecord = {
  __typename?: 'TraceRefsRecord';
  /** Dimensions of TraceRefs that can be grouped by. */
  groupBy: TraceRefsDimensions;
  /** Metrics of TraceRefs that can be aggregated over. */
  metrics: TraceRefsMetrics;
  /** Starting segment timestamp. */
  timestamp: Scalars['Timestamp'];
};

export type TraceSourceLocation = {
  __typename?: 'TraceSourceLocation';
  column: Scalars['Int'];
  line: Scalars['Int'];
};

/** Counts of changes at the type level, including interfaces, unions, enums, scalars, input objects, etc. */
export type TypeChangeSummaryCounts = {
  __typename?: 'TypeChangeSummaryCounts';
  /** Number of changes that are additions of types. */
  additions: Scalars['Int'];
  /**
   * Number of changes that are edits. This includes types changing kind and any type description
   * changes, but also includes adding/removing values from enums, adding/removing members from
   * interfaces and unions, and any enum value deprecation and description changes.
   */
  edits: Scalars['Int'];
  /** Number of changes that are removals of types. */
  removals: Scalars['Int'];
};

/**
 * the TypeFilterConfig is used to isolate
 * types, and subsequent fields, through
 * various configuration settings.
 *
 * It defaults to filter towards user defined
 * types only
 */
export type TypeFilterConfig = {
  /** include abstract types (interfaces and unions) */
  includeAbstractTypes?: InputMaybe<Scalars['Boolean']>;
  /** include built in scalars (i.e. Boolean, Int, etc) */
  includeBuiltInTypes?: InputMaybe<Scalars['Boolean']>;
  /** include reserved introspection types (i.e. __Type) */
  includeIntrospectionTypes?: InputMaybe<Scalars['Boolean']>;
};

export type Uri = {
  __typename?: 'URI';
  /** A GCS URI */
  gcs: Scalars['String'];
};

export type UnignoreOperationsInChecksResult = {
  __typename?: 'UnignoreOperationsInChecksResult';
  graph: Service;
};

export type UpdateOperationCollectionEntryResult =
  | OperationCollectionEntry
  | PermissionError
  | ValidationError;

export type UpdateOperationCollectionResult =
  | OperationCollection
  | PermissionError
  | ValidationError;

/** Describes the result of publishing a schema to a graph variant. */
export type UploadSchemaMutationResponse = {
  __typename?: 'UploadSchemaMutationResponse';
  /** A machine-readable response code that indicates the type of result (e.g., `UPLOAD_SUCCESS` or `NO_CHANGES`) */
  code: Scalars['String'];
  /** A Human-readable message describing the type of result. */
  message: Scalars['String'];
  /** If the publish operation succeeded, this contains its details. Otherwise, this is null. */
  publication?: Maybe<SchemaTag>;
  /** Whether the schema publish operation succeeded (`true`) or encountered errors (`false`). */
  success: Scalars['Boolean'];
  /** If successful, the corresponding publication. */
  tag?: Maybe<SchemaTag>;
};

/** A registered Apollo Studio user. */
export type User = Identity & {
  __typename?: 'User';
  acceptedPrivacyPolicyAt?: Maybe<Scalars['Timestamp']>;
  /** @deprecated Replaced with User.memberships.account */
  accounts: Array<Account>;
  apiKeys: Array<UserApiKey>;
  /** Returns a representation of this user as an `Actor` type. Useful when determining which actor (usually a `User` or `Graph`) performed a particular action in Studio. */
  asActor: Actor;
  /**
   * Get an URL to which an avatar image can be uploaded. Client uploads by sending a PUT request
   * with the image data to MediaUploadInfo.url. Client SHOULD set the "Content-Type" header to the
   * browser-inferred MIME type, and SHOULD set the "x-apollo-content-filename" header to the
   * filename, if such information is available. Client MUST set the "x-apollo-csrf-token" header to
   * MediaUploadInfo.csrfToken.
   */
  avatarUpload?: Maybe<AvatarUploadResult>;
  /**
   * Get an image URL for the user's avatar. Note that CORS is not enabled for these URLs. The size
   * argument is used for bandwidth reduction, and should be the size of the image as displayed in the
   * application. Apollo's media server will downscale larger images to at least the requested size,
   * but this will not happen for third-party media servers.
   */
  avatarUrl?: Maybe<Scalars['String']>;
  betaFeaturesOn: Scalars['Boolean'];
  canUpdateAvatar: Scalars['Boolean'];
  canUpdateEmail: Scalars['Boolean'];
  canUpdateFullName: Scalars['Boolean'];
  createdAt: Scalars['Timestamp'];
  email?: Maybe<Scalars['String']>;
  emailModifiedAt?: Maybe<Scalars['Timestamp']>;
  emailVerified: Scalars['Boolean'];
  experimentalFeatures: UserExperimentalFeatures;
  featureIntros?: Maybe<FeatureIntros>;
  fullName: Scalars['String'];
  /** The user's GitHub username, if they log in via GitHub. May be null even for GitHub users in some edge cases. */
  githubUsername?: Maybe<Scalars['String']>;
  /** The user's unique ID. */
  id: Scalars['ID'];
  /**
   * This role is reserved exclusively for internal Apollo employees, and it controls what access they may have to other
   * organizations. Only admins are allowed to see this field.
   */
  internalAdminRole?: Maybe<InternalMdgAdminRole>;
  /** Whether or not this user is and internal Apollo employee */
  isInternalUser: Scalars['Boolean'];
  /** Last time any API token from this user was used against AGM services */
  lastAuthenticatedAt?: Maybe<Scalars['Timestamp']>;
  logoutAfterIdleMs?: Maybe<Scalars['Int']>;
  /** A list of the user's memberships in Apollo Studio organizations. */
  memberships: Array<UserMembership>;
  /** The user's first and last name. */
  name: Scalars['String'];
  odysseyAttempt?: Maybe<OdysseyAttempt>;
  odysseyAttempts: Array<OdysseyAttempt>;
  odysseyCertifications?: Maybe<Array<OdysseyCertification>>;
  odysseyCourses?: Maybe<Array<OdysseyCourse>>;
  odysseyHasEarlyAccess: Scalars['Boolean'];
  odysseyHasRequestedEarlyAccess: Scalars['Boolean'];
  odysseyTasks?: Maybe<Array<OdysseyTask>>;
  sandboxOperationCollections: Array<OperationCollection>;
  synchronized: Scalars['Boolean'];
  /** List of Zendesk tickets this user has submitted */
  tickets?: Maybe<Array<ZendeskTicket>>;
  type: UserType;
};

/** A registered Apollo Studio user. */
export type UserApiKeysArgs = {
  includeCookies?: InputMaybe<Scalars['Boolean']>;
};

/** A registered Apollo Studio user. */
export type UserAvatarUrlArgs = {
  size?: Scalars['Int'];
};

/** A registered Apollo Studio user. */
export type UserOdysseyAttemptArgs = {
  id: Scalars['ID'];
};

export type UserApiKey = ApiKey & {
  __typename?: 'UserApiKey';
  id: Scalars['ID'];
  keyName?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type UserExperimentalFeatures = {
  __typename?: 'UserExperimentalFeatures';
  exampleFeature: Scalars['Boolean'];
};

/** A single user's membership in a single Apollo Studio organization. */
export type UserMembership = {
  __typename?: 'UserMembership';
  /** The organization that the user belongs to. */
  account: Account;
  /** The timestamp when the user was added to the organization. */
  createdAt: Scalars['Timestamp'];
  /** The user's permission level within the organization. */
  permission: UserPermission;
  /** The user that belongs to the organization. */
  user: User;
};

export type UserMutation = {
  __typename?: 'UserMutation';
  acceptPrivacyPolicy?: Maybe<Scalars['Void']>;
  /** Change the user's password */
  changePassword?: Maybe<Scalars['Void']>;
  createOdysseyAttempt?: Maybe<OdysseyAttempt>;
  createOdysseyCertification?: Maybe<OdysseyCertification>;
  createOdysseyCourses?: Maybe<Array<OdysseyCourse>>;
  createOdysseyTasks?: Maybe<Array<OdysseyTask>>;
  /** Delete the user's avatar. Requires User.canUpdateAvatar to be true. */
  deleteAvatar?: Maybe<AvatarDeleteError>;
  /** Hard deletes the associated user. Throws an error otherwise with reason included. */
  hardDelete?: Maybe<Scalars['Void']>;
  /** Create a new API key for this user. Must take in a name for this key. */
  newKey: UserApiKey;
  /**
   * Create a new API key for this user if there are no current API keys.
   * If an API key already exists, this will return one at random and not create a new one.
   */
  provisionKey?: Maybe<ApiKeyProvision>;
  /** Refresh information about the user from its upstream service (eg list of organizations from GitHub) */
  refresh?: Maybe<User>;
  /** Removes the given key from this user. Can be used to remove either a web cookie or a user API key. */
  removeKey?: Maybe<Scalars['Void']>;
  /** Renames the given key to the new key name. */
  renameKey?: Maybe<UserApiKey>;
  resendVerificationEmail?: Maybe<Scalars['Void']>;
  setOdysseyCourse?: Maybe<OdysseyCourse>;
  setOdysseyResponse?: Maybe<OdysseyResponse>;
  setOdysseyTask?: Maybe<OdysseyTask>;
  /** Submit a zendesk ticket for this user */
  submitZendeskTicket?: Maybe<ZendeskTicket>;
  /** Update information about a user; all arguments are optional */
  update?: Maybe<User>;
  /** Updates this users' preference concerning opting into beta features. */
  updateBetaFeaturesOn?: Maybe<User>;
  /** Update the status of a feature for this. For example, if you want to hide an introductory popup. */
  updateFeatureIntros?: Maybe<User>;
  updateOdysseyAttempt?: Maybe<OdysseyAttempt>;
  /**
   * Update user to have the given internal mdg admin role.
   * It is necessary to be an MDG_INTERNAL_SUPER_ADMIN to perform update.
   * Additionally, upserting a null value explicitly revokes this user's
   * admin status.
   */
  updateRole?: Maybe<User>;
  user: User;
  verifyEmail?: Maybe<User>;
};

export type UserMutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  previousPassword: Scalars['String'];
};

export type UserMutationCreateOdysseyAttemptArgs = {
  testId: Scalars['String'];
};

export type UserMutationCreateOdysseyCertificationArgs = {
  certificationId: Scalars['String'];
  source?: InputMaybe<Scalars['String']>;
};

export type UserMutationCreateOdysseyCoursesArgs = {
  courses: Array<OdysseyCourseInput>;
};

export type UserMutationCreateOdysseyTasksArgs = {
  tasks: Array<OdysseyTaskInput>;
};

export type UserMutationNewKeyArgs = {
  keyName: Scalars['String'];
};

export type UserMutationProvisionKeyArgs = {
  keyName?: Scalars['String'];
};

export type UserMutationRemoveKeyArgs = {
  id: Scalars['ID'];
};

export type UserMutationRenameKeyArgs = {
  id: Scalars['ID'];
  newKeyName?: InputMaybe<Scalars['String']>;
};

export type UserMutationSetOdysseyCourseArgs = {
  course: OdysseyCourseInput;
};

export type UserMutationSetOdysseyResponseArgs = {
  response: OdysseyResponseInput;
};

export type UserMutationSetOdysseyTaskArgs = {
  task: OdysseyTaskInput;
};

export type UserMutationSubmitZendeskTicketArgs = {
  collaborators?: InputMaybe<Array<Scalars['String']>>;
  email: Scalars['String'];
  ticket: ZendeskTicketInput;
};

export type UserMutationUpdateArgs = {
  email?: InputMaybe<Scalars['String']>;
  fullName?: InputMaybe<Scalars['String']>;
  referrer?: InputMaybe<Scalars['String']>;
  trackingGoogleClientId?: InputMaybe<Scalars['String']>;
  trackingMarketoClientId?: InputMaybe<Scalars['String']>;
  userSegment?: InputMaybe<UserSegment>;
  utmCampaign?: InputMaybe<Scalars['String']>;
  utmMedium?: InputMaybe<Scalars['String']>;
  utmSource?: InputMaybe<Scalars['String']>;
};

export type UserMutationUpdateBetaFeaturesOnArgs = {
  betaFeaturesOn: Scalars['Boolean'];
};

export type UserMutationUpdateFeatureIntrosArgs = {
  newFeatureIntros?: InputMaybe<FeatureIntrosInput>;
};

export type UserMutationUpdateOdysseyAttemptArgs = {
  completedAt?: InputMaybe<Scalars['Timestamp']>;
  id: Scalars['ID'];
  pass?: InputMaybe<Scalars['Boolean']>;
};

export type UserMutationUpdateRoleArgs = {
  newRole?: InputMaybe<InternalMdgAdminRole>;
};

export type UserMutationVerifyEmailArgs = {
  token: Scalars['String'];
};

export enum UserPermission {
  BillingManager = 'BILLING_MANAGER',
  Consumer = 'CONSUMER',
  Contributor = 'CONTRIBUTOR',
  Documenter = 'DOCUMENTER',
  GraphAdmin = 'GRAPH_ADMIN',
  LegacyGraphKey = 'LEGACY_GRAPH_KEY',
  Observer = 'OBSERVER',
  OrgAdmin = 'ORG_ADMIN',
}

export enum UserSegment {
  JoinMyTeam = 'JOIN_MY_TEAM',
  LocalDevelopment = 'LOCAL_DEVELOPMENT',
  NotSpecified = 'NOT_SPECIFIED',
  ProductionGraphs = 'PRODUCTION_GRAPHS',
  Sandbox = 'SANDBOX',
  SandboxOperationCollections = 'SANDBOX_OPERATION_COLLECTIONS',
  TryTeam = 'TRY_TEAM',
}

export type UserSettings = {
  __typename?: 'UserSettings';
  appNavCollapsed: Scalars['Boolean'];
  autoManageVariables: Scalars['Boolean'];
  id: Scalars['String'];
  mockingResponses: Scalars['Boolean'];
  preflightScriptEnabled: Scalars['Boolean'];
  responseHints: ResponseHints;
  tableMode: Scalars['Boolean'];
  themeName: ThemeName;
};

/** Explorer user settings input */
export type UserSettingsInput = {
  appNavCollapsed?: InputMaybe<Scalars['Boolean']>;
  autoManageVariables?: InputMaybe<Scalars['Boolean']>;
  mockingResponses?: InputMaybe<Scalars['Boolean']>;
  preflightScriptEnabled?: InputMaybe<Scalars['Boolean']>;
  responseHints?: InputMaybe<ResponseHints>;
  tableMode?: InputMaybe<Scalars['Boolean']>;
  themeName?: InputMaybe<ThemeName>;
};

export enum UserType {
  Apollo = 'APOLLO',
  Github = 'GITHUB',
  Sso = 'SSO',
}

export type ValidateOperationsResult = {
  __typename?: 'ValidateOperationsResult';
  validationResults: Array<ValidationResult>;
};

/** An error that occurs when an operation contains invalid user input. */
export type ValidationError = Error & {
  __typename?: 'ValidationError';
  /** The error's details. */
  message: Scalars['String'];
};

export enum ValidationErrorCode {
  DeprecatedField = 'DEPRECATED_FIELD',
  InvalidOperation = 'INVALID_OPERATION',
  NonParseableDocument = 'NON_PARSEABLE_DOCUMENT',
}

export enum ValidationErrorType {
  Failure = 'FAILURE',
  Invalid = 'INVALID',
  Warning = 'WARNING',
}

/**
 * Represents a single validation error, with information relating to the error
 * and its respective operation
 */
export type ValidationResult = {
  __typename?: 'ValidationResult';
  /** The validation result's error code */
  code: ValidationErrorCode;
  /** Description of the validation error */
  description: Scalars['String'];
  /** The operation related to this validation result */
  operation: OperationDocument;
  /** The type of validation error thrown - warning, failure, or invalid. */
  type: ValidationErrorType;
};

export type VariantCheckConfiguration = {
  __typename?: 'VariantCheckConfiguration';
  /** Time when the check configuration was created. */
  createdAt: Scalars['Timestamp'];
  /** Operation checks configuration for which clients to ignore. */
  excludedClientsConfig: VariantCheckConfigurationExcludedClients;
  /** Operation checks configuration for which operation to ignore. */
  excludedOperationsConfig: VariantCheckConfigurationExcludedOperations;
  /** Operation checks configuration for which variants' metrics data to include. */
  includedVariantsConfig: VariantCheckConfigurationIncludedVariants;
  /** Operation checks configuration for time range and associated thresholds. */
  timeRangeConfig: VariantCheckConfigurationTimeRange;
  /** Time when the check configuration was updated. */
  updatedAt: Scalars['Timestamp'];
  /** Identity of the last actor to update the check configuration, if available. */
  updatedBy?: Maybe<Identity>;
};

export type VariantCheckConfigurationExcludedClients = {
  __typename?: 'VariantCheckConfigurationExcludedClients';
  /**
   * When true, indicates that graph-level configuration is appended to the variant-level
   * configuration. The default at variant creation is true.
   */
  appendGraphSettings: Scalars['Boolean'];
  /**
   * During operation checks, ignore clients matching any of the <excludedClients> filters. The
   * default at variant creation is the empty list.
   */
  excludedClients: Array<ClientFilter>;
};

export type VariantCheckConfigurationExcludedOperations = {
  __typename?: 'VariantCheckConfigurationExcludedOperations';
  /**
   * When true, indicates that graph-level configuration is appended to the variant-level
   * configuration. The default at variant creation is true.
   */
  appendGraphSettings: Scalars['Boolean'];
  /**
   * During operation checks, ignore operations matching any of the <excludedOperationNames> filters.
   * The default at variant creation is the empty list.
   */
  excludedOperationNames: Array<OperationNameFilter>;
  /**
   * During operation checks, ignore operations matching any of the <excludedOperations> filters. The
   * default at variant creation is the empty list.
   */
  excludedOperations: Array<OperationInfoFilter>;
};

export type VariantCheckConfigurationIncludedVariants = {
  __typename?: 'VariantCheckConfigurationIncludedVariants';
  /**
   * During operation checks, fetch operations from the metrics data for <includedVariants> variants.
   * Non-null if useGraphSettings is false and is otherwise null.
   */
  includedVariants?: Maybe<Array<Scalars['String']>>;
  /**
   * When true, indicates that graph-level configuration is used for this variant setting. The default
   * at variant creation is true.
   */
  useGraphSettings: Scalars['Boolean'];
};

export type VariantCheckConfigurationTimeRange = {
  __typename?: 'VariantCheckConfigurationTimeRange';
  /**
   * During operation checks, ignore operations that executed less than <operationCountThreshold>
   * times in the time range. Non-null if useGraphSettings is false and is otherwise null.
   */
  operationCountThreshold?: Maybe<Scalars['Int']>;
  /**
   * Duration operation checks, ignore operations that constituted less than
   * <operationCountThresholdPercentage>% of the operations in the time range. Expected values are
   * between 0% and 5%. Non-null if useGraphSettings is false and is otherwise null.
   */
  operationCountThresholdPercentage?: Maybe<Scalars['Float']>;
  /**
   * During operation checks, fetch operations from the last <timeRangeSeconds> seconds. Non-null if
   * useGraphSettings is false and is otherwise null.
   */
  timeRangeSeconds?: Maybe<Scalars['Long']>;
  /**
   * When true, indicates that graph-level configuration is used for this variant setting. The default
   * at variant creation is true.
   */
  useGraphSettings: Scalars['Boolean'];
};

/** Webhook notification channel */
export type WebhookChannel = Channel & {
  __typename?: 'WebhookChannel';
  id: Scalars['ID'];
  name: Scalars['String'];
  secretToken?: Maybe<Scalars['String']>;
  subscriptions: Array<ChannelSubscription>;
  url: Scalars['String'];
};

/** PagerDuty notification channel parameters */
export type WebhookChannelInput = {
  name?: InputMaybe<Scalars['String']>;
  secretToken?: InputMaybe<Scalars['String']>;
  url: Scalars['String'];
};

export type ZendeskTicket = {
  __typename?: 'ZendeskTicket';
  createdAt: Scalars['Timestamp'];
  description: Scalars['String'];
  graph?: Maybe<Service>;
  id: Scalars['Int'];
  organization?: Maybe<Account>;
  priority: TicketPriority;
  status?: Maybe<TicketStatus>;
  subject: Scalars['String'];
  user?: Maybe<User>;
};

/** Zendesk ticket input */
export type ZendeskTicketInput = {
  description: Scalars['String'];
  graphId?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  priority: TicketPriority;
  subject: Scalars['String'];
};

export type OperationCollectionsQueryVariables = Exact<{
  graphRef: Scalars['ID'];
}>;

export type OperationCollectionsQuery = {
  __typename?: 'Query';
  variant?:
    | {
        __typename: 'GraphVariant';
        id: string;
        name: string;
        operationCollections: Array<{
          __typename?: 'OperationCollection';
          name: string;
          operations: Array<{
            __typename?: 'OperationCollectionEntry';
            name: string;
            currentOperationRevision: {
              __typename?: 'OperationCollectionEntryState';
              body: string;
              variables?: string | null;
              headers?: Array<{
                __typename?: 'OperationHeader';
                name: string;
                value: string;
              }> | null;
            };
          }>;
        }>;
      }
    | { __typename: 'InvalidRefFormat' }
    | null;
};

export const OperationCollectionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'OperationCollections' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'graphRef' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'variant' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'ref' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'graphRef' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
                {
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'GraphVariant' },
                  },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'operationCollections' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'operations' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'name' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'currentOperationRevision',
                                    },
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: { kind: 'Name', value: 'body' },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'variables',
                                          },
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'headers',
                                          },
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'name',
                                                },
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'value',
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OperationCollectionsQuery,
  OperationCollectionsQueryVariables
>;
