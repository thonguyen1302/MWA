/**
 * Created by Sulav on 7/4/17.
 */

$(function () {
    $('.deletebtn').click(function (event) {
        const id = this.getAttribute('id');
        $.post('/delete', {'id': id}).done(function (data) {
            $('#item' + id).remove();
            alert(data.message);
        }).fail(function () {
            alert('Unable to delete location!');
        });
    });

    $('.editbtn').click(function (event) {
        event.preventDefault();
        const location = JSON.parse(this.getAttribute('name'));
        $('#_id').val(location._id);
        $('#name').val(location.name);
        $('#category').val(location.category);
        $('#longitude').val(location.coords[0]);
        $('#latitude').val(location.coords[1]);
    });

    $('#addLocation').click(function (event) {
        event.preventDefault();
        const name = $('#name').val();
        const category = $('#category').val();
        const longitude = $('#longitude').val();
        const latitude = $('#latitude').val();

        if (name === '' || category === '' || longitude === '' || latitude === '') {
            alert('Please enter all the required fields!');
        } else {
            $.post('/add', {
                'name': name,
                'category': category,
                'longitude': longitude,
                'latitude': latitude
            }).done(function (data) {
                const name = $('#name').val('');
                const category = $('#category').val('');
                alert(data.message);
            }).fail(function () {
                alert('Unable to insert location!');
            });
        }
    });

    $('#updateLocation').click(function (event) {
        event.preventDefault();
        const id = $('#_id').val();
        const name = $('#name').val();
        const category = $('#category').val();
        const longitude = $('#longitude').val();
        const latitude = $('#latitude').val();

        const locationObj = {
            'id': id,
            'name': name,
            'category': category,
            'longitude': longitude,
            'latitude': latitude
        };

        if (name === '' || category === '' || longitude === '' || latitude === '') {
            alert('Please enter all the required fields!');
        } else {
            $.post('/update', locationObj).done(function (data) {
                $('#name').val('');
                $('#category').val('');
                $('#longitude').val('');
                $('#latitude').val('');
                alert(data.message);
                location.reload();

            }).fail(function () {
                alert('Unable to update location!');

            });
        }
    });

    $('#searchLocation').click(function (event) {

        const category = $('#category').val();
        const name = $('#name').val();
        const longitude = $('#longitude').text();
        const latitude = $('#latitude').text();

        if (category === '') {
            alert('Category must be entered!');

        } else if (longitude === '-' || latitude === '-') {
            alert('Location loading... Please, try again!');

        } else {
            const searchObj = {
                'name': name,
                'category': category,
                'longitude': longitude,
                'latitude': latitude
            };

            $.post('/search', searchObj)
                .done(function (data) {
                    if (data.length === 0) {
                        $('#message').text('Unable to find any nearby location based on your search criteria.');
                        $('#locations').empty();
                    } else {
                        $('#message').text('');
                        $('#locations').empty();
                        data.forEach(function (location) {
                            $('#locations').append(`<li>${location.name} - ${location.category}</li>`);
                        });
                    }
                })
                .fail(function () {
                    alert('Unable to search location!');

                });
        }
    });


});