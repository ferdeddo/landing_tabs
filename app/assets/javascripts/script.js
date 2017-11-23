
$(document).ready(function() {
    $("ul.tabs").each(function() {
        var $stylecss, $section, $links = $(this).find('a');
        //'find' permet d'obtenir les descendants de chaque élément.
        //$(this) sert à retourner un objet jQuery à partir de l'objet Javascript natif this
        $stylecss = $($links.filter("[href='" + location.hash + "']")[0] || $links[0]);
        console.log($stylecss);
        $stylecss.addClass('stylecss');

        $section = $($stylecss[0].hash);

        $links.not($stylecss).each(function() {
            $(this.hash).hide();
        });

        $(this).on('click', 'a', function(event) {
            $stylecss.removeClass('stylecss');
            $section.hide();

            $stylecss = $(this);
            $section = $(this.hash);

            $stylecss.addClass('stylecss');
            $section.show();

            event.preventDefault();
            //Empecher l'action par défaut de l'événement de se déclencher.
        });
    });
});
