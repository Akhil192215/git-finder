const axios = require("axios");

class searchController {
  async searchUser(req, res) {
    const { search, inputType } = req.body;
    let response;
    if (inputType === "login") {
      try {
        response = await axios.get(
          `https://api.github.com/search/users?q=${search}`,
          {
            headers: {
              Authorization: `Bearer ${"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"}`,
            },
          }
        );

        if (!response.data.items.length) throw error;
        return res.json(response.data.items);
      } catch (error) {
        console.log("error");
        return res.send(404);
      }
    }

    if (inputType === "email") {
      try {
        response = await axios.get(
          `https://api.github.com/search/users?q=${search}`,
          {
            headers: {
              Authorization: `Bearer ${"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"}`,
            },
          }
        );
        if (!response.data.items.length) throw error;
        return res.json(response.data.items);
      } catch (error) {
        console.log(error);
        return res.send(404);
      }
    }
    if (inputType === "userName") {
      try {
        response = await axios.get(
          `https://api.github.com/search/users?q=${search}+in:name`,
          {
            headers: {
              Authorization: `Bearer ${"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"}`,
            },
          }
        );
        if (!response.data.items.length) throw error;
        return res.json(response.data.items);
      } catch (error) {
        console.log("not found");
        return res.send(404);
      }
    }
  }
}

module.exports = new searchController();
