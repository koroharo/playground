# Closure Library を保存しているパス
CLOSUREROOT=../closure-library

#####################################################################
DEPSWRITER=python $(CLOSUREROOT)/closure/bin/build/depswriter.py
#####################################################################

deps.js: photo/*.js
	$(DEPSWRITER) \
	    --root_with_prefix="photo ../../../koroharo/photo" \
	    --output_file=$@

.PHONY: clean
clean:
ifeq ($(findstring Windows, $(OS)), Windows)
	-del deps.js
else
	-rm deps.js
endif