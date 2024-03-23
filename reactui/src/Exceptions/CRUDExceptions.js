export class AssetsFetchException extends Error {
  constructor(message) {
    super(message);
    this.name = "AssetsFetchException";
  }
}
export class AssetUpdateException extends Error {
  constructor(message) {
    super(message);
    this.name = "AssetUpdateException";
  }
}

export class AssetDeleteException extends Error {
  constructor(message) {
    super(message);
    this.name = "AssetDeleteException";
  }
}
