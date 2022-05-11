export const ManageToken = {
  set(token: string) {
    localStorage.setItem('@Vize::Token', token);
  },
  get() {
    const token = localStorage.getItem('@Vize::Token');
    return `Bearer ${token}`;
  },
};
