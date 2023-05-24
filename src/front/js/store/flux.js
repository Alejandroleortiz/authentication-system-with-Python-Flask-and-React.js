const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			API_URL: 'https://alejandroleortiz-fluffy-engine-p4g4rpvqwgwh6jqj-3001.preview.app.github.dev',
			currentUser: null,
			error: null,
		},
		actions: {
			register: async (e, navigate) => {
				//Login
				e.preventDefault()

				try {
					const { API_URL } = getStore()
					const { full_name, email, password } = e.target;
					const credentials = {
						full_name: full_name?.value,
						email: email?.value,
						password: password?.value,
					}

					const options = {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: {
							'Content-Type': 'application/json'
						}
					}

					const response = await fetch(`${API_URL}/api/signup`, options)
					const data = await response.json()

					if (data.msg) {
						setStore({
							currentUser: null,
							error: data
						})

					} else {
						setStore({
							currentUser: data,
							error: null
						})
						sessionStorage.setItem('currentUser', JSON.stringify(data))
						navigate('/')
					}

				} catch (error) {
					console.log(error.message);

				}
			},	// Use getActions to call a function within a fuction

			login: async (e, navigate) => {
				e.preventDefault()
				try {
					const { API_URL } = getStore()
					const { email, password } = e.target;
					const credentials = { email: email.value, password: password.value }

					const options = {
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: {
							'Content-Type': 'application/json'
						}
					}

					const response = await fetch(`${API_URL}/api/login`, options)
					const data = await response.json()

					if (data.msg) {
						setStore({
							currentUser: null,
							error: data
						})

					} else {
						setStore({
							currentUser: data,
							error: null
						})
						sessionStorage.setItem('currentUser', JSON.stringify(data))
						navigate('/private')
					}

				} catch (error) {
					console.log(error.message);

				}
			},

			checkCurrentUser: () => { //mantener la información del currentUser
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: JSON.parse(sessionStorage.getItem('currentUser'))
                    })
                }
            },

			logout: () => {
                if (sessionStorage.getItem('currentUser')) {
                    setStore({
                        currentUser: null
                    })
                    sessionStorage.removeItem('currentUser')
                }
            },
		}
	};
};

export default getState;
