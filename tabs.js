<ul class="tabs">
	<li data-action="" data-params="123"><a href="#"> link 1 </a></li>
	<li data-action="" data-params="xyz"><a href="#"> link 2 </a></li>
</ul>
    
<script>	
$('#tabs').on('click', function (e) {
	var target = e.target;
	var match = 'LI';

	while (target !== document.body && target.nodeName !== match) {
		target = target.parentElement;
	}

	if (target.nodeName === match) {
		switch (target.attr('data-action')) {
			
			default:
				break;
	}
}            
<script>