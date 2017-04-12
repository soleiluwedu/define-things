// Class containing Thai-Duong Nguyen's Oxford Dictionary API settings.

class OxfordClientAPI extends XMLHttpRequest {
  constructor() {
    super();
    this.url = "https://od-api.oxforddictionaries.com:443/api/v1/entries/en/";
    this.app_id = "ad69b01f";
    this.app_key = "20b01a13f68becd67a2639835964a609";
  }

  setHeaders() {
    this.setRequestHeader("Accept", "application/json");
    this.setRequestHeader("app_id", this.app_id);
    this.setRequestHeader("app_key", this.app_key);
  }

  oxfordOpen(word, type = '/regions=us') {
    this.open('GET', `${this.url}${word}${type}`);
    this.setHeaders();
  }

  definition(word) {
    this.oxfordOpen(word);
  }

  synonym(word) {
    this.oxfordOpen(word, '/synonyms');
  }

  antonym(word) {
    this.oxfordOpen(word, '/antonyms');
  }
}

export default OxfordClientAPI;