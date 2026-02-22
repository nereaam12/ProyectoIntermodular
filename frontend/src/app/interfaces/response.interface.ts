export interface Response {
  title:       string;
  description: string;
  image:       string;
  pdfPath:     string;
  user:        User;
  location:    string;
  year:        number;
}

export interface User {
  id:        number;
  name:      string;
  surname:   string;
  email:     string;
  telephone: number;
}
