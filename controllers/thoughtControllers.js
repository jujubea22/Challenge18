updateThoughts({params, body}, res)
{
    Thoughts.findOneUpdate({ id: params.thoughtsId}, body,)

}

deleteThoughts({params}, res){
    Thgouths.findOneDelete({ id: params.thoughtsId})
    .then (deletedThoughts =>)
}

module.exports = thoughtControllers;