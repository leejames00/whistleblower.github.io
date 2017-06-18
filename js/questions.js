radio_five = `<br>
<label class="radio-inline"><input type="radio" name="optradio" value="1">전혀 아니다</label>
<label class="radio-inline"><input type="radio" name="optradio" value="2">아니다</label>
<label class="radio-inline"><input type="radio" name="optradio" value="3">보통이다</label>
<label class="radio-inline"><input type="radio" name="optradio" value="4">그렇다</label>
<label class="radio-inline"><input type="radio" name="optradio" value="5">매우 그렇다</label>
`

total=0

$("#start").on( "click", function() {
	$("#start").remove()
	$("#questionTable").append(`<a class="qNum"> Q1. </a>` + "대를 위해 소를 희생할 수 있다")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="q1">Next &raquo;</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#q1", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	$("#questionTable").empty()
	$("#questionTable").append(`<a class="qNum"> Q2. </a>` + "국민의 알 권리를 위해 정부의 기밀자료를 공개해야 한다")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="q2">Next &raquo;</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#q2", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	$("#questionTable").empty()
	$("#questionTable").append(`<a class="qNum"> Q3. </a>` + "공공의 불이익이 자신의 조직 이익을 크게 상회하고 있다고 믿고 있다")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="q3">Next &raquo;</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#q3", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	$("#questionTable").empty()
	$("#questionTable").append(`<a class="qNum"> Q4. </a>` + "자신은 현재 해당 조직의 구성원이거나 과거 어느 시점에 있어서 조직의 일원이였던 사람이다")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="q4">Next &raquo;</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#q4", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	$("#questionTable").empty()
	$("#questionTable").append(`<a class="qNum"> Q5. </a>` + "조직의 부정부패라는 병리 현상이 치유되기를 원한다")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="q5">Next &raquo;</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#q5", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	$("#questionTable").empty()
	$("#questionTable").append(`<a class="qNum"> Q6. </a>` + "상위 계급과 계층에 대한 개인적인 악의적 보복이 주된 원인이다")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="q6">Next &raquo;</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#q6", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	$("#questionTable").empty()
	$("#questionTable").append(`<a class="qNum"> Q7. </a>` + "정부 문서 중 일부는 적어도 어느 기간까지는 기밀로 유지되어야 한다고 믿는다")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="q7">Next &raquo;</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#q7", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	$("#questionTable").empty()
	$("#questionTable").append(`<a class="qNum"> Q8. </a>` + "망명의 위험을 감수 할 수 있는가")
	$("#questionTable").append(radio_five)
	nq = `<br> <a class="btn btn-success btn-lg" id="result">결과 보기</a>`
	$("#questionTable").append(nq)
})

$("#questionTable").on("click", "#result", function() {
	radioValue = parseInt($('input[name=optradio]:checked').val())
	if (radioValue) {
		total += radioValue
	}
	if(total<10) {
		result = "내부고발은 자신의 삶에 위협이 될 수 있습니다. 다시 한번 생각해보시길 바랍니다!"
	}
	else if (total<20){
		result = "내부 고발의 경우, 조직 내에서의 파면, 직위 해제, 승진 불이익 또는 집단 따돌림 등의 보복을 받을 수 있습니다. 또 민형사상의 법적 불이익을 받을 가능성도 있습니다! 다시 한번 생각해보세요"
	}
	else {
		result = "공공의 이익을 위해 힘써주시는 당신! 박수를 받아 마땅합니다"
	}
	console.log(total)
	$("#questionTable").empty()
	$("#questionTable").append(result)
	
})




