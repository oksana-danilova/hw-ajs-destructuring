export function getSkills(obj) {
    let skillsData = [];
    if (Object.prototype.hasOwnProperty.call(obj,'special')) {
        for (let item of obj['special'] ) {
            const {id, name, icon, description = 'Description is unavailable'} = item;
            skillsData.push({'id': id, 'name': name, 'icon': icon, 'description': description});
        }
        return skillsData;
    } else {
        return 'Hero have not attacks'
    }
}