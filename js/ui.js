/*!
 * Custom UI Template - Bootstrap 4
**/

'use strict';

$(document).ready(function(){

  // Make the left sidebar scrollable
  $('.ui-sideleft .tab-pane').perfectScrollbar();

  // Left Sidebar Tab
  $('.ui-sideleft-tab .nav-link').on('click', function(e){
    e.preventDefault();

    // finding and unsetting current active tab
    $('.ui-sideleft-tab .nav-link').each(function(){
      $(this).removeClass('active');
    });

    // make this as a new active tab
    $(this).addClass('active');

    // finding and hiding current tab pane
    $('.ui-sideleft .tab-pane').each(function(){
      $(this).removeClass('active');
    });

    // making this target as a new active pane
    $($(this).attr('href')).addClass('active');
  });

  // show sub menu in left sidebar
  $('.show-sub + .nav-sub').slideDown();

  // Toggles a class that will show/hide left menu
  $('#naviconLeft').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('collapse-menu');
  });

  // Toggles a class that will shows/left menu
  // and push the mainpanel (mobile only)
  $('#naviconLeftMobile').on('click', function(e) {
    e.preventDefault();
    $('body').toggleClass('show-left');
  });

  // In mobile it shows search input form when clicking search button
  // This prevent search form submission when input value is empty
  $('#searchBtn').on('click', function(e) {
    var parent = $(this).parent();
    parent.toggleClass('show-search');
    if(parent.find('input').val() === '') {
      e.preventDefault();
    }
  });

  // When in mobile, this will hide input form when value is empty
  $('#searchBar input').on('focusout', function() {
    if($(this).val() === '') {
      $(this).closest('form').removeClass('show-search');
    }
  });


  // Show/hide sub navigation of sidebar menu
  $('.with-sub').on('click', function(e){
    e.preventDefault();
    $(this).next().slideToggle();
    $(this).toggleClass('show-sub');
  });

  // Toggles
  $('.toggle').toggles({
    on: true,
    height: 22
  });

  // highlight syntax highlighter
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });

});
