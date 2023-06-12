class User {
  constructor(name, role) {
    if (this.validateRole(role)) {
      this.name = name;
      this.role = role;
    } else {
      alert('Invalid role');
    }
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log('User logged in');
  }

  logout() {
    console.log('User logged out');
  }

  changeName(newName) {
    this.name = newName;
  }

  changePassword(newPassword) {
    console.log('Password changed');
  }

  validateRole(role) {
    return role === 'admin' || role === 'user';
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
  }

  addUser() {
    console.log('User added');
  }

  removeUser() {
    console.log('User removed');
  }

  changeUserRole(user, newRole) {
    if (user instanceof User && this.validateRole(newRole)) {
      user.role = newRole;
    } else {
      alert('Invalid user or role');
    }
  }

  getAllUsers() {
    console.log('Fetching all users');
  }

  removeAllUsers() {
    console.log('Removing all users');
  }
}

const user = new User('Petro', 'admin');
const nameValue = document.getElementById('nameValue');
const roleValue = document.getElementById('roleValue');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

nameValue.textContent = user.getName();
roleValue.textContent = user.getRole();

logInBtn.addEventListener('click', () => {
  user.login();
});

logOutBtn.addEventListener('click', () => {
  user.logout();
});