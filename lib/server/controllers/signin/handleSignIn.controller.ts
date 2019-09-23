const handleSignin = (db: any, bcrypt: any, req: any, res: any) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return Promise.reject('incorrect form submission');
    }
    return db.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then((data: any) => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            if (isValid) {
                return db.select('*').from('users')
                    .where('email', '=', email)
                    .then((user: any) => user[0])
                    .catch((err: any) => res.status(400).json('unable to get user'))
            } else {
                return Promise.reject('wrong credentials');
            }
        })
        .catch((err: any) => err)
}

export default handleSignin;