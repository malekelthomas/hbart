export interface User {
	id?: string;
	email: string;
	name: string;
	password: string;
	profile: Profile;
}

export interface Profile {
	id?: string;
	bio?: string;
}
