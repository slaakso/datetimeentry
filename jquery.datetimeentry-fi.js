/* http://keith-wood.name/datetimeEntry.html
   Finnish initialisation for the jQuery date/time entry extension.
   Written by Seppo Laaksonen ( Seppo.Laaksonen@taikala.com) */
(function($) {
	$.datetimeEntry.regional['fi'] = {datetimeFormat: 'D.O.Y H.M',
        monthNames: ['Tammikuu','Helmikuu','Maaliskuu','Huhtikuu','Toukokuu','Kesäkuu',
        'Heinäkuu','Elokuu','Syyskuu','Lokakuu','Marraskuu','Joulukuu'],
        monthNamesShort: ['Tammi','Helmi','Maalis','Huhti','Touko','Kesä',
        'Heinä','Elo','Syys','Loka','Marras','Joulukuu'],
		dayNames: ['Sunnuntai','Maanantai','Tiistai','Keskiviikko','Torstai','Perjantai','Lauantai'],
		dayNamesShort: ['Su','Ma','Ti','Ke','To','Pe','La'],
		ampmNames: ['AM', 'PM'],
		spinnerTexts: ['Tänään', 'Edellinen kenttä', 'Seuraava kenttä', 'Lisää', 'Vähennä'],
		isRTL: false};
    $.datetimeEntry.setDefaults($.datetimeEntry.regional['fi']); 
})(jQuery);
