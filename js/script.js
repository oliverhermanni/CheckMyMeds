// instantiate the bloodhound suggestion engine
var numbers = new Bloodhound({
datumTokenizer: Bloodhound.tokenizers.whitespace,
queryTokenizer: Bloodhound.tokenizers.whitespace,
local:  ["Dolormin","Dormicum","Diblocin","Dapoxetin","Doxepin","Doxyhexal"]
});

// initialize the bloodhound suggestion engine
numbers.initialize();

$('#typeahead').typeahead(
{
items: 4,
source:numbers.ttAdapter()  
});

$("#mfswitch").bootstrapSwitch();