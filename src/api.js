// dicka punya

const axios = require("axios");
const FormData = require("form-data");

class API {
  constructor(baseURL, options) {
    this.URI = baseURL;
    this.create = axios.create({
      baseURL: this.URI,
      timeout: 60000,
      headers: options?.headers ? options.headers : {},
      ...options,
    });
  }

  async get(path = "/", query = {}, apikey, options = {}) {
    try {
      const res = await this.create.get(path, {
        params:
          query || apikey
            ? new URLSearchParams(
                Object.entries({
                  ...query,
                  ...(apikey ? { apikey: apikey } : {}),
                })
              )
            : "",
        ...options,
      });

      return res.data;
    } catch {
      return { status: 400 };
    }
  }

  async post(path = "", data = {}, apikey, options = {}) {
    try {
      if (!!data) {
        const form = new FormData();

        for (let key in data) {
          let valueKey = data[key];
          form.append(key, valueKey);
        }

        const res = await this.create.post(
          path +
            new URLSearchParams(
              Object.entries({ ...(apikey ? { apikey: apikey } : {}) })
            ),
          form,
          { ...options }
        );

        return res.data;
      } else {
        return { status: 400 };
      }
    } catch {
      return { status: 400 };
    }
  }
}

module.exports = { API };
