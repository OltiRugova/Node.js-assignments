async function getUserGit(username) {
    try {
        const userUrl = `https://api.github.com/users/${username}`;
        const reposUrl = `https://api.github.com/users/${username}/repos`;

        const userResponse = await fetch(userUrl);

        if (!userResponse.ok) {
            if (userResponse.status === 404) {
                throw new Error("Username nuk ekziston në GitHub");
            } else {
                throw new Error("Gabim gjatë marrjes së user-it");
            }
        }

        const userData = await userResponse.json();

        const reposResponse = await fetch(reposUrl);

        if (!reposResponse.ok) {
            throw new Error("Gabim gjatë marrjes së repositories");
        }

        const reposData = await reposResponse.json();

        console.log("Username:", userData.login);
        console.log("Name:", userData.name);
        console.log("Public repos:", userData.public_repos);
        console.log("Repositories count:", reposData.length);

    } catch (err) {
        console.log("Error:", err.message);
    }
}

module.exports = getUserGit;