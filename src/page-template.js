function generateHTML(teamData) {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <script src="https://kit.fontawesome.com/b56bc5337a.js" crossorigin="anonymous"></script>
  <title>My Team</title>
</head>
<body>
  <header class="container-fluid p-5 bg-dark">
      <h1 class="text-light text-center">My Team</h1>
  </header>
  <main class="container-md my-5">
      <div class="row justify-content-center">
          ${generateTeamMemberCards(teamData)}
      </div>
  </main>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>`;
}

function generateTeamMemberCards(teamData) {
    return `${teamData.filter((teamMember) => teamMember.getRole() === 'Manager')
        .map((manager) => {
            return `
          <div class="col-12 col-md-6 col-lg-4">
              <div class="card m-2">
                  <div class="card-header bg-primary text-light py-3 px-4">
                      <h2>${manager.getName()}</h2>
                      <h3><i class="fas fa-mug-hot"></i> ${manager.getRole()}</h3>
                  </div>
                  <ul class="list-group list-group-flush fs-5">
                      <li class="list-group-item py-3 px-4">
                          <span class="fw-bold">Email: </span>
                          <a href="mailto:${manager.getEmail()}" target="_blank">${manager.getEmail()}</a>
                      </li>
                      <li class="list-group-item py-3 px-4"><span class="fw-bold">Office Number: </span>${manager.getOfficeNum()}</li>
                      <li class="list-group-item py-3 px-4"><span class="fw-bold">Employee ID: </span>${manager.getId()}</li>
                  </ul>
              </div>
          </div>`;
        })}
      ${teamData.filter((teamMember) => teamMember.getRole() === 'Engineer')
            .map((engineer) => {
                return `
          <div class="col-12 col-md-6 col-lg-4">
              <div class="card m-2">
                  <div class="card-header bg-primary text-light py-3 px-4">
                      <h2>${engineer.getName()}</h2>
                      <h3><i class="fas fa-laptop-code"></i> ${engineer.getRole()}</h3>
                  </div>
                  <ul class="list-group list-group-flush fs-5">
                      <li class="list-group-item py-3 px-4">
                          <span class="fw-bold">Email: </span>
                          <a href="mailto:${engineer.getEmail()}" target="_blank">${engineer.getEmail()}</a>
                      </li>
                      <li class="list-group-item py-3 px-4">
                          <span class="fw-bold">GitHub Profile: </span>
                          <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
                      </li>
                      <li class="list-group-item py-3 px-4"><span class="fw-bold">Employee ID: </span>${engineer.getId()}</li>
                  </ul>
              </div>
          </div>`;
            })
            .join('')}
      ${teamData.filter((teamMember) => teamMember.getRole() === 'Intern')
            .map((intern) => {
                return `
          <div class="col-12 col-md-6 col-lg-4">
              <div class="card m-2">
                  <div class="card-header bg-primary text-light py-3 px-4">
                      <h2>${intern.getName()}</h2>
                      <h3><i class="fas fa-glasses"></i> ${intern.getRole()}</h3>
                  </div>
                  <ul class="list-group list-group-flush fs-5">
                      <li class="list-group-item py-3 px-4">
                          <span class="fw-bold">Email: </span>
                          <a href="mailto:${intern.getEmail()}" target="_blank">${intern.getEmail()}</a>
                      </li>
                      <li class="list-group-item py-3 px-4"><span class="fw-bold">School: </span>${intern.getSchool()}</li>
                      <li class="list-group-item py-3 px-4"><span class="fw-bold">Employee ID: </span>${intern.getId()}</li>
                  </ul>
              </div>
          </div>`;
            })
            .join('')}
`;
}

module.exports = generateHTML;