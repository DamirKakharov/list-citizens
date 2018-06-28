export default (users, filters, docs) => {

    let gg = users.filter(user => {
        const textMatch =
            user.name.toLowerCase().includes(filters.toLowerCase()) ||
            user.birthday.toLowerCase().includes(filters.toLowerCase()) ||
            user.patronymic.toLowerCase().includes(filters.toLowerCase()) ||
            user.surname.toLowerCase().includes(filters.toLowerCase());
        return textMatch;
    });

    const ids = gg.map(g => g.id)
    const v = [];
    for (let i = 0; i < ids.length; i++) {
        const { userId } = { userId: ids[i] };
        if (docs[userId] !== undefined) {
            v.push(docs[userId].map(doc => doc.number));
        }
    }

    return users.filter(user => {
        const textMatch =
            user.name.toLowerCase().includes(filters.toLowerCase()) ||
            user.birthday.toLowerCase().includes(filters.toLowerCase()) ||
            user.patronymic.toLowerCase().includes(filters.toLowerCase()) ||
            user.surname.toLowerCase().includes(filters.toLowerCase());
        return textMatch;
    }).sort((user1, user2) => {
        return user1.surname.localeCompare(user2.surname);
    });
};
